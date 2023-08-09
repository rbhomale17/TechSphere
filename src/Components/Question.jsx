import React from "react";

const Question = ({ feedbackData }) => {
  return (
    <div className="container mx-auto mt-4 bg-white">
      <h2 className="text-xl font-semibold">Feedback Questions</h2>
      <table className="table-auto mt-2">
        <thead>
          <tr>
            <th className="px-4 py-2">Question</th>
            <th className="px-4 py-2">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((ele, ind) => {
            return (
              <tr key={ind}>
                <td className="border px-4 py-2">Question {ind + 1}</td>
                <td className="border px-4 py-2">{ele[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Question;
