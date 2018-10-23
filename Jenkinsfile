pipeline {
  agent {
    node {
      label 'Node.js'
    }

  }
  stages {
    stage('Test') {
      steps {
        sh '''#!/bin/bash
npm test'''
      }
    }
  }
}