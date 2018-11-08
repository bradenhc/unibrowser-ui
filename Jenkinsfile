pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.jenkinsagent'
      args '-v /var/run/docker.sock:/var/run/docker.sock -u node'
    }
  }
  environment {
    HOME = '.'
    UI_PROD_NAME = 'unibrowser-ui'
    UI_IMAGE = 'unibrowser/unibrowser-ui'
  }
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker build . -t $UI_IMAGE'
        sh 'docker rm -f $UI_PROD_NAME || true'
        sh 'docker run -d --name $UI_PROD_NAME -p 80:80 $UI_IMAGE'
      }
    }
  }
}