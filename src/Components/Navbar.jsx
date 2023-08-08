import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // bg-blue-50
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center">
      <img
        src="https://techsphere.app/static/media/primarylogo-color.da88ef7d.png"
        width={"20%"}
        alt=""
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Navbar;
