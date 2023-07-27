const conversationHistory = [];

async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput.trim()) return;

    addToConversation('User: ' + userInput);
    conversationHistory.push('User: ' + userInput);

    try {
        const response = await getGPT3Response(userInput);
        addToConversation('AI: ' + response);
        conversationHistory.push('AI: ' + response);
    } catch (error) {
        console.error('Error fetching response from GPT-3.5:', error);
        addToConversation('AI: Oops! Something went wrong.');
    }

    document.getElementById('userInput').value = '';
}

async function getGPT3Response(prompt) {
    try {
        const apiKey = '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'; // Replace with your actual GPT-3.5 API key
        const apiUrl = 'https://api.openai.com/v1/chat/completions'; // Use the chat-based API endpoint

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        };

        const data = {
            model: "gpt-3.5-turbo",
            messages: conversationHistory.map((message, index) => {
                return {
                    role: index % 2 === 0 ? 'user' : 'assistant',
                    content: message
                };
            })
        };

        const response = await axios.post(apiUrl, data, { headers });
        return response.data.choices[0].message.content.trim();
    } catch (error) {
        if (error.response) {
            console.error('API Response Data:', error.response.data);
            console.error('API Response Status:', error.response.status);
            console.error('API Response Headers:', error.response.headers);
        }
        throw new Error('Error fetching response from GPT-3.5:', error);
    }
}

function addToConversation(message) {
    const conversationDiv = document.getElementById('conversation');
    conversationDiv.innerHTML += '<p>' + message + '</p>';
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
}
