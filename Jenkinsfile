pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.jenkinsagent'
      args '-v /var/run/docker.sock:/var/run/docker.sock -u node'
    }
  }
  environment {
    HOME = '.'
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
        sh 'docker build . -t unibrowser/unibrowser-ui'
      }
    }
  }
}