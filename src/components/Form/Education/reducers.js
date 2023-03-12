// Imported actions for education
import { CREATE_EDUCATION, REMOVE_EDUCATION } from "./actions";

// Decides what to do with the state when an action happens
export const educations = (state = [], action) => {
  const { type, payload } = action;

  // Switch statement to handle creation or removal of education from the form
  switch (type) {
    case CREATE_EDUCATION: {
      const { education } = payload;
      const newEducation = {
        education,
      };
      return state.concat(newEducation);
    }
    // If same degree is entered twice it'll not be accepted
    case REMOVE_EDUCATION: {
      const { education } = payload;
      return state.filter((obj) => obj.education.degree !== education.degree);
    }
    default:
      return state;
  }
};
