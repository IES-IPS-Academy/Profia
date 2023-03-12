import React, { useState } from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
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
      <div className="row mb-2">
        <div className="col">
          <DatePickerComponent
            placeholder="Start Date"
            format="MMM-yyyy"
            start="Year"
            depth="Year"
            value={start}
            onChange={(e) =>
              setStartDate(moment(e.target.value).format("MMMM YYYY"))
            }
            cleared={() => setStartDate("")}
          />
        </div>
        <div className="col">
          <DatePickerComponent
            placeholder="End Date"
            format="MMM-yyyy"
            start="Year"
            depth="Year"
            value={end}
            onChange={(e) =>
              setEndDate(moment(e.target.value).format("MMMM YYYY"))
            }
            enabled={endDateEnabled}
            cleared={() => setEndDate("")}
          />
        </div>
      </div>
    </div>
  );
};
