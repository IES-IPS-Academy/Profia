// Imported actions for experience
import { CREATE_EXPERIENCE, REMOVE_EXPERIENCE } from "./actions";

// Decides what to do with the state when an action happens
export const experiences = (state = [], action) => {
  const { type, payload } = action;

  // Switch statement to handle creation or removal of experience from the form
  switch (type) {
    case CREATE_EXPERIENCE: {
      const { experience } = payload;
      const newExperience = {
        experience,
      };
      return state.concat(newExperience);
    }
    case REMOVE_EXPERIENCE: {
      const { experience } = payload;
      return state.filter(
        (exp) => exp.experience.position !== experience.position
      );
    }
    default:
      return state;
  }
};
