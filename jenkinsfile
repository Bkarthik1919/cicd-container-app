pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t cicd-app .'
      }
    }

    stage('Run') {
      steps {
        sh 'docker run -d -p 3000:3000 cicd-app'
      }
    }
  }
}
