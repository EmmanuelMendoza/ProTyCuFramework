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
    stage('') {
      steps {
        sh 'script{publishHTML(target:[allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: \'reports\', reportFiles: \'index.html\', reportName: \'HTML Report\', reportTitles: \'\'])}'
      }
    }
  }
}