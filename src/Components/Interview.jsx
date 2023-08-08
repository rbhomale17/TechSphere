import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { VideoComp } from "./VideoComp";

const Interview = () => {
  const [loading,setLoading] = useState(false);
  const category = JSON.parse(localStorage.getItem("category"));
  const other = localStorage.getItem("other") || "";
  category.category.push(other);
  const [conversationHistory, setConversationHistory] = useState([
    `ask me 10 ${category.category.join(",")} ` +
      'question in array format like this in an arrray format please ["question1","question2"] and make sure dont use ` this in your response any where',
  ]);
  const [userAnswer, setUserAnswer] = useState([]);
  // const [conversationHistory, setConversationHistory] = useState([]);
  console.log(conversationHistory);
  // console.log("user asnwer :",userAnswer)
  const navigate = useNavigate();
  async function getGPT3Response() {
    try {
      const apiKey = process.env.REACT_APP_API_KEY; // Replace with your actual GPT-3.5 API key
      // console.log(process.env.REACT_APP_API_KEY);
      const apiUrl = 'https://api.openai.com/v1/chat/completions'; // Use the chat-based API endpoint
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };

      const data = {
        model: "gpt-3.5-turbo",
        messages: conversationHistory.map((message, index) => {
          return {
            role: index % 2 === 0 ? "user" : "assistant",
            content: message,
          };
        }),
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(
          `Network response was not ok - ${response.status} ${response.statusText}`
        );
      }

      const responseData = await response.json();
      return responseData.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error fetching response from GPT-3.5:", error);
      throw new Error("Error fetching response from GPT-3.5:", error);
    }
  }
  async function sendOwnMessage(msg) {
    try {
      const apiKey = process.env.REACT_APP_API_KEY; // Replace with your actual GPT-3.5 API key
      const apiUrl = "https://api.openai.com/v1/chat/completions"; // Use the chat-based API endpoint
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };

      const data = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: msg,
          },
        ],
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(
          `Network response was not ok - ${response.status} ${response.statusText}`
        );
      }

      const responseData = await response.json();
      return responseData.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error fetching response from GPT-3.5:", error);
      throw new Error("Error fetching response from GPT-3.5:", error);
    }
  }
  const addToConversation = (message) => {
    setConversationHistory((prevHistory) => [...prevHistory, message]);
    // if (message.startsWith('AI: ')) {
    //   const extractedText = message.replaceAll('AI: ', '');
    //   setIsSpeaking(true);
    // readText(message);
  };
  const fetchAndReadApiResponse = async () => {
    // stopSpeaking();
    try {
      const response = await getGPT3Response("");
      addToConversation(response);
    } catch (error) {
      console.error("Error fetching response from GPT-3.5:", error);
      // addToConversation('AI: Oops! Something went wrong.');
    }
    // setUserInput('');
  };
  useEffect(() => {
    fetchAndReadApiResponse();
  }, []);
  function speakText(text) {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    // Adjust volume and rate as needed
    utterance.volume = 1.0; // Range from 0.0 to 1.0
    utterance.rate = 1.0; // Range from 0.1 to 10.0

    speechSynthesis.speak(utterance);
    // isSpeaking = true;
  }
  // const questions = [
  //   "What is Node.js?",
  //   "What are the advantages of using Node.js?",
  //   "How can we read command line arguments in Node.js?",
  //   "What is callback hell in Node.js and how can it be avoided?",
  // ];
  const arrayPattern = /\[.*?\]/s;
  let match;
  if (conversationHistory.length >= 2) {
    match = conversationHistory[1].match(arrayPattern);
  }
  const questions = match ? JSON.parse(match[0]) : [];
  // console.log(questions,match)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  // speakText(currentQuestion);

  useEffect(() => {
    speakText(currentQuestion);
  }, [currentQuestionIndex]);
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();
  if (currentQuestionIndex == 0 && transcript == "") {
    speakText(currentQuestion);
  }
  const handleAnswerSubmission = async () => {
    setUserAnswer((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionIndex] = transcript;
      return updatedAnswers;
    });
    if (currentQuestionIndex + 1 == 10) {
      alert("Interview Ended");
      setLoading(true);
      const response = await sendOwnMessage(
        `this is my questions array [${questions}] and this is my answer array[${userAnswer},${transcript}]  provide me feedback for each question and also provide me the genereal feedback on the basis of conceptual understading and communication skill and other things that can be accessed make sure to give in json format only for example { "question1_feedback": "Your feedback", "question2_feedback": "Your feedback",...questionsfeedback,"general_feedback": { "conceptual_understanding": N, "communication_skill": N, "accuracy": N, "clarity": N } } here N can be anything between 0-10 and your feedback means generate feedback according to the question and answer`
      );
      localStorage.setItem("feedback", JSON.stringify(response));
      setLoading(false);
      console.log(response);
      navigate("/feedback");
      return;
    }
    setCurrentQuestionIndex((prev) => prev + 1);
    resetTranscript();
  };
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <div className="p-8">
<h1 className="text-4xl font-bold mb-8">Interview</h1>
      {loading ? (<div className="flex items-center justify-center h-[90vh]">
        <h1>Wait for the Feedback</h1>
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
    </div>) : 

      (

      
      <div className="flex h-[90vh]">
        <div className="border w-3/4 flex flex-col p-4">
          <h1 className="text-xl font-bold mb-4">
            Question {currentQuestionIndex + 1}: {currentQuestion}
          </h1>
          <p className="mb-2">Answer:</p>
          <textarea
            value={transcript}
            onChange={() => {}} // Add an empty onChange handler to prevent React warning
            cols="30"
            rows="10"
            className="border rounded p-2 resize-none mb-4"
          ></textarea>
          <div className="flex space-x-4">
            <button
              onClick={startListening}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Start Listening
            </button>
            <button
              onClick={SpeechRecognition.stopListening}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Stop Listening
            </button>
          </div>
        </div>
        <div className="border w-1/4 p-4">
          <div className="video mb-4">
            <VideoComp />
          </div>
          <button
            onClick={handleAnswerSubmission}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
          >
            Submit Answer
          </button>
        </div>
      </div>
      )
    }
    </div>
    
  );
};

export default Interview;
