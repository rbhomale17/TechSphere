import React, { useState } from "react";
import Select from "react-select";
import CourseDetails from "./CourseDetails";
import CourseProvider from "../Contexts/CourseContext";

const options = [
  {
    value: "",
    label: "Select",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPJxv37UESSyMb4OlkeToPbh4gRUh01RQ95QEzbhBI2BumXCpAK5rY-0Ya4qgTPaYNy0&usqp=CAU",
  },
  {
    value: "MERN",
    label: "MERN",
    image:
      "https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png",
  },
  {
    value: "JAVA",
    label: "JAVA",
    image: "https://img.icons8.com/color/480w/java-coffee-cup-logo--v1.png",
  },
  {
    value: "NODE",
    label: "NODE",
    image:
      "https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png",
  },
  {
    value: "OTHER INFO",
    label: "OTHER INFO",
    image:
      "https://cdn4.vectorstock.com/i/1000x1000/52/73/machine-learning-logo-design-brain-ai-technology-vector-28535273.jpg",
  },
];

const CustomOption = ({ innerProps, label, data }) => (
  <div
    {...innerProps}
    style={{ display: "flex", alignItems: "center", height: "50px",gap:"10px" ,width:"100%"}}
  >
    <img
      src={data.image}
      alt={data.label}
      style={{ width: "40px", height: "40px", marginBottom: "20px" }}
    />
    {label}
  </div>
);

const CustomSingleValue = ({ innerProps, label, data }) => (
  <div
    {...innerProps}
    style={{ display: "flex", alignItems: "center", height: "20px",width:"100%"}}
  >
    <img
      src={data.image}
      alt={data.label}
      style={{ width: "40px", height: "40px", marginBottom: "20px" }}
    />
    {label}
  </div>
);

export default function HomePage() {
  const [course, setCourse] = useState("");
  const [showCheckboxes, setShowCheckboxes] = useState(false); // State to manage the visibility of checkboxes
  const [category, setCategory] = useState([]);

  const handleCheckBox = (e) => {
    let { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };
  console.log(category);

  const handleChange = (selectedOption) => {
    setCourse(selectedOption.value);
    setShowCheckboxes(!!selectedOption.value); // Show checkboxes if the course has a value
  };

  return (
    <CourseProvider>
      <div className="flex flex-col items-center space-x-4">
        <h1 className="text-2xl font-bold margin-auto text-gray-900">
          Select Your Course
        </h1>
        <br />
        <Select
          styles={{
            control: (provided) => ({
              ...provided,
              minHeight: "10px", // Adjust the height here
              width: "100%", // Change to "100%" from "400%"
              padding: 5,
            }),
          }}
          options={options}
          value={options.find((option) => option.value === course)}
          onChange={handleChange}
          components={{
            Option: CustomOption,
            SingleValue: CustomSingleValue,
          }}
        />
        <br />
        {course && showCheckboxes && (
          <div>
            <h2 className="text-lg font-bold text-black-600">
              Choose your options:
            </h2>
            <br />
            <div className="space-y-2">
              {course === "MERN" && (
                <>
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBox}
                      checked={category.includes("React")}
                      value={"React"}
                      name="React"
                    />{" "}
                    React
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBox}
                      checked={category.includes("Redux")}
                      value={"Redux"}
                      name="Redux"
                    />{" "}
                    Redux
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBox}
                      checked={category.includes("Hooks")}
                      value={"Hooks"}
                      name="Hooks"
                    />{" "}
                    Hooks
                  </label>
                </>
              )}
              {course === "JAVA" && (
                <>
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBox}
                      checked={category.includes("JAVA")}
                      value={"JAVA"}
                      name="JAVA"
                    />{" "}
                    JAVA
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBox}
                      checked={category.includes("MySQL")}
                      value={"MySQL"}
                      name="MySQL"
                    />{" "}
                    MySQL
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBox}
                      checked={category.includes("SpringBoot")}
                      value={"SpringBoot"}
                      name="SpringBoot"
                    />{" "}
                    SpringBoot
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBox}
                      checked={category.includes("JAVABasics")}
                      value={"JAVABasics"}
                      name="JAVABasics"
                    />{" "}
                    JAVA Basics
                  </label>
                </>
              )}
              {course === "NODE" && (
                <>
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBox}
                      checked={category.includes("NodeBasic")}
                      value={"NodeBasic"}
                      name="NodeBasic"
                    />{" "}
                    Node Basic
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBox}
                      checked={category.includes("Express")}
                      value={"Express"}
                      name="Express"
                    />{" "}
                    Express
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBox}
                      checked={category.includes("MongoDB")}
                      value={"MongoDB"}
                      name="MongoDB"
                    />{" "}
                    MongoDB
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBox}
                      checked={category.includes("HTTP")}
                      value={"HTTP"}
                      name="HTTP"
                    />{" "}
                    HTTP
                  </label>
                </>
              )}
              {course === "OTHER INFO" && (
                <>
                  <input
                    className="p-3 w-100"
                    placeholder="Write Your Topic here"
                  />
                </>
              )}
              {/* Add more options for other courses */}
            </div>
          </div>
        )}
        <br />
        <h4 className="text-xl font-bold text-black-600">
          Selected Track:
          <span className="text-xl font-bold text-yellow-600">
            &nbsp;{course}
          </span>
        </h4>
        <br />
        <div>
          <button
            style={{ flex: 1, padding: 15, fontSize: "25px" }}
            className="bg-green-500 text-white rounded-lg font-bold"
          >
            Start Interview
          </button>
        </div>
        <br />
        <br />
        <CourseDetails category={category} />
      </div>
    </CourseProvider>
  );
}
