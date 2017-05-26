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
			   def v = tool 'NodeJS7'
                echo "Building tool ${v}"
				sh 'echo '
				sh 'id'
				sh 'uname -a'
        		sh 'npm install'
        	}
    	}
    }
}
