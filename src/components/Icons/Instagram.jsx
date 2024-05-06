import React from "react";
import instagram from "../../../public/UI/instagram.svg";

const Instagram = () => {
  return (
    <div className="fixed z-50 bottom-4 left-4">
      <a href="https://www.instagram.com/newlookba/" target="_blank">
        <img src={instagram} alt="instagram" className="w-14 h-14" />
      </a>
    </div>
  );
};

export default Instagram;
