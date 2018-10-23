pipeline {
  agent {
    node {
      label 'Node.js'
    }

  }
  stages {
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}