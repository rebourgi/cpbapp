#!groovy
node {
    stage('Checkout') {
        retry(3) {
            checkout scm
        }
    }
    stage('Build') {
    	env.NODE_PATH = tool 'NodeJS7'
		withDockerContainer(image : 'uber/android-build-environment', args: " -v $NODE_PATH:$NODE_PATH") {
			withEnv(["PATH+NODE=${tool 'NodeJS7'}/bin"]) {
        		sh 'npm install'
        	}
    	}
    }
}
