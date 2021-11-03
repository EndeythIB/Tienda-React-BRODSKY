import React from "react";

//ExternalComponents
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const ScrollWidget = () => {
  return (
    <div className="">
      <a href="#catalog">
        <FontAwesomeIcon icon={faArrowDown} size="lg" />
      </a>
    </div>
  );
};

export default ScrollWidget;
