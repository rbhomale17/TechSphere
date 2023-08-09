import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed top-0 left-0 w-full bg-blue-200 text-white shadow-md p-2 flex justify-center items-center z-10">
      <img
        src="https://techsphere.app/static/media/primarylogo-color.da88ef7d.png"
        width={"20%"}
        alt=""
        onClick={() => navigate("/")}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
