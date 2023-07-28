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
        const apiKey = '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'; // Replace with your actual   GPT-3.5 API key
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
        console.log(conversationHistory)
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

    // formating message text to text to speek operation here Rushikesh bhomale
    {
        // Extract AI messages and speak them
        if (message.startsWith('AI: ')) {
            const extractedText = message.replaceAll('AI: ', '');
            document.getElementById('stopReadingButton').style.display = 'none';
            document.getElementById('readResponseButton').style.display = 'inline';
            speakText(extractedText);
        }
    }
    // formating message text to text to speek operation here Rushikesh;
}

// reading Response send from serrver here 
let isSpeaking = false;

var utterance;
function speakText(text) {
    const speechSynthesis = window.speechSynthesis;
  const  utterance = new SpeechSynthesisUtterance(text);
    // Adjust volume and rate as needed
    utterance.volume = 1.0; // Range from 0.0 to 1.0
    utterance.rate = 1.0;   // Range from 0.1 to 10.0

    speechSynthesis.speak(utterance);
    isSpeaking = true;
}

function stopSpeaking() {
    const speechSynthesis = window.speechSynthesis;
    speechSynthesis.cancel();
    isSpeaking = false;
}

function fetchAndReadApiResponse() {
    // Show the "Stop Reading" button
    stopSpeaking();
    document.getElementById('stopReadingButton').style.display = 'inline';
    document.getElementById('readResponseButton').style.display = 'none';

}

document.getElementById('readResponseButton').addEventListener('click', fetchAndReadApiResponse);
// reading Response send from serrver here 