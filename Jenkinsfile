pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        sh 'cnpm install'
        sh 'npm run dev'
      }
    }

  }
}