pipeline {
  agent {
    docker {
      image 'node:8.12.0-alpine'
      args '-v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        sh './run-tests.sh'
      }
    }
    stage('Deploy - Stage') {
      steps {
        sh 'docker build . -t unibrowser/unibrowser-ui'
      }
    }
  }
  environment {
    HOME = '.'
  }
}