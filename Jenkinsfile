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
				sh 'mkdir "$ANDROID_HOME/licenses"'
				sh 'echo -e "\n8933bad161af4178b1185d1a37fbf41ea5269c55" > "$ANDROID_HOME/licenses/android-sdk-license"'
				sh 'echo -e "\nd56f5187479451eabf01fb78af6dfcb131a6481e" >> /usr/local/android-sdk/licenses/android-sdk-license'
				//sh 'add-apt-repository -y ppa:cwchien/gradle'
				//sh 'apt-get update'
				//sh 'apt-get -y install gradle'
				sh 'apt-get -y install wget unzip'
				sh 'wget https://services.gradle.org/distributions/gradle-3.4.1-bin.zip'
				sh 'mkdir /opt/gradle && unzip -d /opt/gradle gradle-3.4.1-bin.zip'
				sh 'export PATH=$PATH:/opt/gradle/gradle-3.4.1/bin && gradle -v'
        		sh 'npm install'
        		sh 'export PATH=$PATH:/opt/gradle/gradle-3.4.1/bin && ionic cordova platform add android'
        		//sh 'cp signing/* platforms/android/ && ionic cordova build android --release'
        		sh 'export PATH=$PATH:/opt/gradle/gradle-3.4.1/bin && ionic cordova build android --release --buildConfig=build.json'
        	}
        	archiveArtifacts artifacts: 'platforms/android/build/outputs/apk/*.apk'
    	}
    }
}
