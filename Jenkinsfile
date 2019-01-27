pipeline {
  agent any
  stages {
    stage('Run Tests') {
      steps {
        bat(script: 'npm run cucumbertest', returnStatus: true, returnStdout: true)
      }
    }
  }
}