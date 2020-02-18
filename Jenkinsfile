pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Test') {
      steps {
        script {
          sh 'npm run test'
        }
      }
      post {
        always {
          publishHTML target: [
            allowMissing         : false,
            alwaysLinkToLastBuild: false,
            keepAll             : true,
            includes: '**/*',
            reportDir            : 'coverage/lcov-report',
            reportFiles          : 'index.html',
            reportName           : 'coverage-report'
          ]
          publishHTML target: [
            allowMissing         : false,
            alwaysLinkToLastBuild: false,
            keepAll             : true,
            includes: '**/*',
            reportDir            : 'coverage',
            reportFiles          : 'test-report.html',
            reportName           : 'test-report'
          ]
        }
      }
    }
  }
}