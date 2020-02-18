pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Startup') {
      steps {
        script {
          sh 'npm install'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          sh 'npm run test'
        }
      }
      post {
        always {
          publishHTML target: [
            allowMissing         : true,
            alwaysLinkToLastBuild: true,
            keepAll             : true,
            includes: '**/*',
            reportDir            : 'coverage/lcov-report',
            reportFiles          : 'index.html',
            reportName           : 'Test Report'
          ]
          publishHTML target: [
            allowMissing         : true,
            alwaysLinkToLastBuild: true,
            keepAll             : true,
            includes: '**/*',
            reportDir            : 'coverage',
            reportFiles          : 'test-report.html',
            reportName           : 'Test Info'
          ]
        }
      }
    }
  }
}