// Actions for experience field
export const CREATE_EXPERIENCE = "CREATE_EXPERIENCE";

// To create a new experience in the form
export const createExperience = (experience) => ({
  type: CREATE_EXPERIENCE,
  payload: { experience },
});

// To remove an added experience from the form
export const REMOVE_EXPERIENCE = "REMOVE_EXPERIENCE";

export const removeExperience = (experience) => ({
  type: REMOVE_EXPERIENCE,
  payload: { experience },
});
