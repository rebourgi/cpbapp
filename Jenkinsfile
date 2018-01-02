#!groovy
node {
    stage('Checkout') {
        retry(3) {
            checkout scm
        }
    }
    stage('Build') {
		withDockerContainer(image : 'uber/android-build-environment', args: " -u root ") {
			sh 'rm -Rf plugins platforms node_modules typings'
			sh 'mkdir "$ANDROID_HOME/licenses"'
			sh 'echo -e "\n8933bad161af4178b1185d1a37fbf41ea5269c55" > "$ANDROID_HOME/licenses/android-sdk-license"'
			sh 'echo -e "\nd56f5187479451eabf01fb78af6dfcb131a6481e" >> /usr/local/android-sdk/licenses/android-sdk-license'
			sh 'add-apt-repository -y ppa:cwchien/gradle'
			sh 'apt-get update'
			sh 'apt-get -y install gradle'
			sh 'curl -sL https://deb.nodesource.com/setup_7.x | bash -'
			sh 'apt-get -y install nodejs'
			sh 'npm install -g ionic cordova'
			//sh 'npm install typings --global'
			//sh 'typings install dt~google.maps --global --save'
    		sh 'npm install'
    		sh 'ionic cordova platform add android'
    		//sh 'cp signing/* platforms/android/ && ionic cordova build android --release'
    		sh 'ionic cordova build android --release --buildConfig=build.json'
    		
        	archiveArtifacts artifacts: 'platforms/android/build/outputs/apk/*.apk'
    	}
    }
}
