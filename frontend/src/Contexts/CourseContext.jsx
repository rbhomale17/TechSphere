import React, { createContext, useContext, useState } from "react";

const CourseContext = createContext();

export function useCourseContext() {
  return useContext(CourseContext);
}

export default function CourseProvider({ children }) {
  const [selectedOptions, setSelectedOptions] = useState({});
  // console.log(selectedOptions);
  const updateSelectedOptions = (course, options) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [course]: options,
    }));
  };

  return (
    <CourseContext.Provider value={{ selectedOptions, updateSelectedOptions }}>
      {children}
    </CourseContext.Provider>
  );
}
