#!groovy
node {
    try {
        stage('Checkout') {
            retry(3) {
                checkout scm
            }
        }
        stage('Build') {
			docker.image('uber/android-build-environment').inside {
				withEnv(["PATH+NODE=${tool 'NodeJS7'}/bin"]) {
            		sh 'yarn install'
            	}
        	}
        }
    } catch (any) {
        throw any
    } finally {
        emailext(body: '${DEFAULT_CONTENT}', mimeType: 'text/html',
                replyTo: '$DEFAULT_REPLYTO', subject: '${DEFAULT_SUBJECT}',
                to: emailextrecipients([[$class: 'CulpritsRecipientProvider'],
                                        [$class: 'RequesterRecipientProvider']]))
    }
}
