#!groovy
node {
    stage('Checkout') {
        retry(3) {
            checkout scm
        }
    }
    stage('Build') {
    	env.NODE_PATH = tool 'NodeJS7'
		withDockerContainer(image : 'uber/android-build-environment', args: " -u root -v $NODE_PATH:$NODE_PATH") {
			withEnv(["PATH+NODE=${tool 'NodeJS7'}/bin:/usr/local/sbin:/usr/sbin:/sbin"]) {
				sh 'add-apt-repository -y ppa:cwchien/gradle'
				sh 'apt-get update'
				sh 'apt-get -y install gradle'
        		sh 'npm install'
        		sh 'ionic cordova platform add android'
        		sh 'ionic cordova build android'
        	}
    	}
    }
}
