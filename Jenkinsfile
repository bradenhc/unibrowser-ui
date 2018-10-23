pipeline {
  agent {
    docker {
      image '8.12.0-alpine'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}