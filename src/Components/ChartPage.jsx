import React, { useEffect, useState } from "react";
import Question from "./Question";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Piechart = () => {
  const Data = JSON.parse(JSON.parse(localStorage.getItem("feedback")));

  // State to store the feedback data
  const [feedbackData, setFeedbackData] = useState([]);

  // Convert the Data object to an array and store it in the state
  useEffect(() => {
    if (Data) {
      const dataEntries = Object.entries(Data);
      const filteredData = dataEntries.filter(
        ([key]) => key !== "general_feedback"
      );
      setFeedbackData(filteredData);
    }
  }, []);

  console.log(feedbackData);

  return (
    <div className="p-4 md:p-8">
      <div className="w-90 m-auto">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
          <Question feedbackData={feedbackData} />
          <div className="flex flex-col md:flex-col justify-center items-center md:space-x-8">
            <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
              <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                Your Interview Score
              </h1>
              <div className="w-64 h-64 md:w-96 md:h-96 relative">
                <Pie
                  data={{
                    labels: [
                      "Conceptual Understanding",
                      "Communication Skill",
                      "Accuracy",
                      "Clarity",
                    ],
                    datasets: [
                      {
                        label: "Score",
                        data: [
                          Data.general_feedback.conceptual_understanding,
                          Data.general_feedback.communication_skill,
                          Data.general_feedback.accuracy,
                          Data.general_feedback.clarity,
                        ],
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.7)",
                          "rgba(54, 162, 235, 0.7)",
                          "rgba(255, 206, 86, 0.7)",
                          "rgba(75, 192, 192, 0.7)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        font: { size: 20, weight: "bold" },
                        text: "Feedback Scores",
                        display: true,
                      },
                      legend: {
                        display: true,
                        position: "bottom",
                        labels: {
                          font: { size: 14 },
                        },
                      },
                    },
                  }}
                  height={200} // Increase the height
                  width={200} // Increase the width
                />
              </div>
            </div>
            <div className="container mx-auto mt-4">
              <h2 className="text-xl md:text-2xl font-semibold">Score Table</h2>
              <table className="table-auto mt-2 w-80 md:w-96">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Criteria</th>
                    <th className="px-4 py-2">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Conceptual Understanding</td>
                    <td className="border px-4 py-2">
                      {Data.general_feedback.conceptual_understanding}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Communication Skill</td>
                    <td className="border px-4 py-2">
                      {Data.general_feedback.communication_skill}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Accuracy</td>
                    <td className="border px-4 py-2">
                      {Data.general_feedback.accuracy}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Clarity</td>
                    <td className="border px-4 py-2">
                      {Data.general_feedback.clarity}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piechart;
