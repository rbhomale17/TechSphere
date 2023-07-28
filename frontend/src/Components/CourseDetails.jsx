import React from "react";
import { useCourseContext } from "../Contexts/CourseContext"; // Import the context hook

export default function CourseDetails({ category }) {
  //   const { category } = useCourseContext();
  console.log(category);
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold text-black-600">Selected Options:</h2>
      <br />
      {/* <h1>Abhi:{category}</h1> */}
      {/* <ul className="list-disc"> */}
      {/* {Object.entries(category).map(([course, options]) => (
          <li key={course}>
            <strong>{course}:</strong>
            <ul>
              {options.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </li>
        ))}  */}
      {/* </ul> */}
      {/* <h2>Selected Categories:</h2> */}
      <ul>
        {category.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}
