pipeline {
  agent any
  stages {
    stage('Install npm packages') {
      steps {
        bat(script: 'npm install', returnStatus: true, returnStdout: true)
      }
    }
    stage('Run tests') {
      steps {
        sh 'npm run cucumbertest'
      }
    }
  }
}