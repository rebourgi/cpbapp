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
                sh 'ls /opt/applications/pic/jenkins/home/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NodeJS7'
				sh 'id'
				sh 'uname -a'
        		sh 'npm install'
        	}
    	}
    }
}
