#!groovy
node {
    stage('Checkout') {
        retry(3) {
            checkout scm
        }
    }
    stage('Build') {
		docker.image('uber/android-build-environment').inside {
			withEnv(["PATH+NODE=${tool 'NodeJS7'}/bin"]) {
        		sh 'npm install'
        	}
    	}
    }
}
