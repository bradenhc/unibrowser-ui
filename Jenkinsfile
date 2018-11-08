pipeline {
  agent none
  environment {
    HOME = '.'
  }
  stages {
    stage('Install Dependencies') {
      agent {
        docker {
          image 'node:8.12.0-alpine'
        }
      }
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      agent {
        docker {
          image 'node:8.12.0-alpine'
        }
      }
      steps {
        sh 'npm test'
      }
    }
    stage('Build') {
      agent {
        docker {
          image 'node:8.12.0-alpine'
        }
      }
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      agent {
        docker {
          image 'docker'
          args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
      }
      steps {
        sh 'docker build . -t unibrowser/unibrowser-ui'
      }
    }
  }
}