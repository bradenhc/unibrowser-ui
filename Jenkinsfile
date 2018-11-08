pipeline {
  agent {
    docker {
      image 'node:8.12.0-alpine'
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
  }
  environment {
    HOME = '.'
  }
}