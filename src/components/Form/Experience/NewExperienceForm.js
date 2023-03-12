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
      <input
        className="form-control form-control-sm mb-2"
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <textarea
        className="form-control form-control-sm mb-2"
        placeholder="Role description"
        rows="3"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
    </div>
  );
};
