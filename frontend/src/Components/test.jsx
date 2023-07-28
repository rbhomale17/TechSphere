import React, { useState ,useEffect} from 'react';


const ChatInterface = () => {
  const [userInput, setUserInput] = useState('');
  const [conversationHistory, setConversationHistory] = useState(['ask me 4 Java and SpringBoot question in array format like this in an arrray format please ["question1","question2"] and make sure dont use ` this in your response any where']);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [utterance, setUtterance] = useState(null);
console.log(conversationHistory)
  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const addToConversation = (message) => {
    setConversationHistory((prevHistory) => [...prevHistory, message]);
    // if (message.startsWith('AI: ')) {
    //   const extractedText = message.replaceAll('AI: ', '');
    //   setIsSpeaking(true);
      readText(message);
    
  };

  const readText = (text) => {
    const speechSynthesis = window.speechSynthesis;
    const newUtterance = new SpeechSynthesisUtterance(text);
    newUtterance.volume = 1.0;
    newUtterance.rate = 1.0;

    speechSynthesis.cancel();
    speechSynthesis.speak(newUtterance);

    setUtterance(newUtterance);
  };

  const stopSpeaking = () => {
    const speechSynthesis = window.speechSynthesis;
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const fetchAndReadApiResponse = async () => {
    stopSpeaking();
    try {
      const response = await getGPT3Response(userInput);
      addToConversation(response);
    } catch (error) {
      console.error('Error fetching response from GPT-3.5:', error);
      addToConversation('AI: Oops! Something went wrong.');
    }
    setUserInput('');
  };

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
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`Network response was not ok - ${response.status} ${response.statusText}`);
      }
  
      const responseData = await response.json();
      return responseData.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error fetching response from GPT-3.5:', error);
      throw new Error('Error fetching response from GPT-3.5:', error);
    }
  }
  
useEffect(()=>{
    fetchAndReadApiResponse();
},[])
  return (
    <div className="chat-interface">
      <div id="conversation" className="conversation">
        {conversationHistory.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <input
        type="text"
        id="userInput"
        value={userInput}
        onChange={handleUserInputChange}
      />
      <button onClick={fetchAndReadApiResponse}>Send</button>
      {isSpeaking && (
        <button onClick={stopSpeaking}>Stop Reading</button>
      )}
      
    </div>
  );
};

export default ChatInterface;
