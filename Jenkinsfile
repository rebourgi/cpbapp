#!groovy
node {
    stage('Checkout') {
        retry(3) {
            checkout scm
        }
    }
       def v = tool 'NodeJS7'
    stage('Build') {
		docker.image('uber/android-build-environment').inside {
			withEnv(["PATH+NODE=${tool 'NodeJS7'}/bin"]) {
                echo "Building tool ${v}"
				sh 'echo '
				sh 'id'
				sh 'uname -a'
        		sh 'npm install'
        	}
    	}
    }
}
