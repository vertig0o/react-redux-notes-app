import React from "react";
import logos from "../images/logos.png";
import linledin from "../images/linkedin.png";
import github from "../images/github.png";
function Logo() {
  return (
    <div className="row mx-auto pe-2" style={{ maxWidth: 570 }}>
      <div className="col-12 col-md-11">
        <img className="img-fluid mt-4 hoverOp" src={logos} alt="Logo" />
      </div>
      <div className="col-12 col-md-1 mt-2">
        <div>
          <a href="https://github.com/vertig0o">
            <img
              className="mt-md-5 me-3"
              src={github}
              width={24}
              alt="github logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/atilay-yoruk/">
            <img
              className="mt-md-2"
              // src="./linkedin.png"
              src={linledin}
              width={24}
              alt="linkedin logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Logo;
