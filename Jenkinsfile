pipeline {
  agent none
  stages {
    stage('Build') {
      steps {
        sh './build.sh'
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