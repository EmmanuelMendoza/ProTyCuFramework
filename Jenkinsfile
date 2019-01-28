pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        bat(script: 'npm install', returnStatus: true, returnStdout: true, label: 'install')
        bat(script: 'npm run webdriver-update', returnStatus: true, returnStdout: true, label: 'webdriver-manager')
        bat(script: 'npm run cucumbertest', returnStatus: true, returnStdout: true, label: 'cucumber')
      }
    }
  }
}