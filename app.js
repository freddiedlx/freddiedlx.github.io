document.addEventListener('DOMContentLoaded', function() {
    const chatbot = new VFChat({
        versionID: 'your-version-id-here',
        openChatButtonSelector: '#chatbot',
        options: {
            config: {
                runtimeEndpoint: 'your-runtime-endpoint',
            }
        }
    });

    chatbot.init();
});