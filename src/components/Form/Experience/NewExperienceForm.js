import React, { useState } from "react";
import { createExperience } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewExperienceForm = ({ experiences = [], onCreatePressed }) => {
  const [position, setPosition] = useState("");
  return (
    <div className="border rounded bg-light p-3 m-2">
      <input
        className="form-control form-control-sm mb-2"
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
    </div>
  );
};
