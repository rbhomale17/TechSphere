# TechSphere
# Project Name:- TechSphere - Interview Assessment System

<!-- [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) -->

# Interview Assessment System
This project is a collaborative web-based Interview Assessment System built with React.js, React-Router, Chart.js, and React-Chartjs-2. The team of five members worked diligently to develop this application in just two days. The system allows users to select a course, answer interview questions via speech recognition, and provides feedback based on the responses.

## Description
TechSphere is a collaborative web-based Interview Assessment System that revolutionizes the interview process. Built with cutting-edge technologies such as React.js, React-Router, Chart.js, and React-Chartjs-2, our team of five talented developers passionately crafted this application in just two days. The system empowers users to effortlessly select a course, provide interview responses through speech recognition, and receive comprehensive feedback based on their performance.

## Tech Stacks
- **Frontend:** 
  - React.js, 
  - React-Router, .
  - Chart.js, 
  - React-Chartjs-2
  - WebRTC (for video streaming)
- **GPT API:** 
  - Chat GPT-3.5 API by OpenAI
- **Speech Recognition:** 
  - react-speech-recognition
- **Other Tools:** 
  - NPM 


## Team Members
***Team Member-1 & Student Code***    : ***Rushikesh Diliprao Bhomale https://github.com/rbhomale17***

***Team Member-2 & Student Code*** : ***Lakxya Rupeja https://github.com/LaxyaRupeja***

***Team Member-3 & Student Code*** : ***Goutham V https://github.com/vgoutham786***

***Team Member-4 & Student Code*** : ***Abhishek Raskar https://github.com/AbhishekRaskar***

***Team Member-5 & Student Code*** : ***Ashish Meel https://github.com/Ashishmeel007***


## Deployed Links
- **Project Live Link:-** https://techsphere-puce.vercel.app/

## Getting Started
To experience TechSphere on your local machine, follow these simple steps:
1. Clone this repository to your local machine.
   ```bash
    https://github.com/rbhomale17/TechSphere.git
   ```
2. Navigate to the project directory in the terminal.
   ```bash
    cd TechSphere/frontend
   ```

## Prerequisites
Make sure you have the following software installed:
- Node.js
- npm

## Installation
Install the project dependencies by running:
```
npm install
```
Start the development server:
```
npm start
```
The application should now be running at http://localhost:3000. Access it in your web browser to get started.

## Usage
TechSphere offers a seamless user experience through its intuitive interface:

1. **Homepage:** Begin by navigating to the homepage. Here, you can select a course from the dropdown list and choose additional options based on your preferences. If needed, you can provide custom text by selecting the "OTHER INFO" option. Once you've made your selections, click the "Start Interview" button to proceed.

2. **Interview Page:** The Interview page enables you to answer a series of interview questions in a conversational format. Utilizing advanced speech recognition technology, you can verbally provide your responses. As you answer each question, the system saves your responses in the local state.

3. **Feedback Generation:** After answering all the interview questions, TechSphere leverages the power of the GPT-3.5 API to generate detailed feedback on your performance. The feedback is stored in local storage for your reference.

4. **ChartPage:** The ChartPage component displays a visually appealing pie chart that represents your feedback scores. It fetches the feedback data from local storage and uses the React Chart.js library to create an informative chart. The chart displays scores for "Conceptual Understanding," "Communication Skill," "Accuracy," and "Clarity." Additionally, a table with the same scores is presented for quick reference.
   
<!-- To use the application, first, navigate to the homepage. Here, select a course from the dropdown list and choose additional options if applicable. Once you have made your selections, click the "Start Interview" button to proceed to the interview page. Here, you will be asked a series of questions. You can answer the questions by speaking into your microphone. After answering all the questions, the application will send your answers to the GPT-3.5 API to generate feedback. The feedback will be stored in local storage and can be viewed on the Question page. -->

## Features

TechSphere comes equipped with an array of powerful features:

- **Home Page:** An inviting and user-friendly form for course selection and additional options.
- **Interview Page:** A conversational interview experience with speech recognition for seamless responses.
- **Feedback Generation:** Utilization of GPT-3.5 API to provide comprehensive feedback based on interview responses.
- **Video Streaming:** Live streaming of the user's video for enhanced interaction during the interview process.
- **Navbar:** A sleek navigation bar with the TechSphere logo for easy access to the home page.
- **Question Page:** A dedicated page to view feedback questions and responses for personal evaluation.

## Navbar
The Navbar.jsx component is a simple navigation bar that contains the project logo. By clicking on the logo, users can easily navigate back to the home page.

## HomePage
The HomePage.jsx component serves as the initial landing page for the Interview Assessment System. It presents users with a form containing a dropdown list of courses to choose from. Depending on the selected course, relevant checkboxes are displayed to allow users to choose additional options. If the user selects the "OTHER INFO" option, they can input custom text. After selecting the course and options, users can click the "Start Interview" button to proceed to the interview page.

## Interview
The Interview.jsx component is responsible for conducting the interview. It fetches interview questions from GPT-3.5 API and utilizes the react-speech-recognition library to enable speech recognition functionality. This enables users to provide verbal responses to the interview questions, and their answers are saved in the local state. Once users have answered all the questions, both their responses and the questions are sent to the GPT-3.5 API to generate feedback.

## VideoComp
The VideoComp.jsx component grants access to the user's media stream, which is then used to display their video using the navigator.mediaDevices.getUserMedia method. The component renders the user's video, enhancing the interactive nature of the assessment process.

## Question
The Question.jsx component receives feedback data as props and displays the feedback questions along with the user's responses in a table format. This allows users to review their interview performance and the generated feedback.

### ChartPage
The ChartPage.jsx component displays a pie chart representing feedback scores. It fetches the feedback data from local storage and uses React Chart.js library to display the data in a pie chart. The feedback data is converted from an object to an array using the useState and useEffect hooks. The chart displays scores for "Conceptual Understanding," "Communication Skill," "Accuracy," and "Clarity." It also shows a table with the same scores.

## Home Page View
<img width="1069" alt="Screenshot 2023-07-29 234858" src="https://github.com/rbhomale17/TechSphere/assets/121092445/d9784637-dfc3-487d-bf49-41dc862bf192">

## Interview Page View
<img width="1068" alt="Screenshot 2023-07-29 235150" src="https://github.com/rbhomale17/TechSphere/assets/121092445/baf69651-0c07-4652-b350-87049572ab35">

<img width="1062" alt="Screenshot 2023-07-29 235403" src="https://github.com/rbhomale17/TechSphere/assets/121092445/16af2efe-53cc-43a2-981d-78587875eb21">

## Waiting for Feedback
<img width="1066" alt="Screenshot 2023-07-29 235420" src="https://github.com/rbhomale17/TechSphere/assets/121092445/d0bc939a-cfc0-44b0-9456-b86a1c32e918">

## Feedback Page View
<img width="1079" alt="Screenshot 2023-07-29 235443" src="https://github.com/rbhomale17/TechSphere/assets/121092445/3fbf4301-14d6-4318-97d3-e372c54f7a99">

# Thank You For Visiting 😊

