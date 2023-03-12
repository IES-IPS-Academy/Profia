// Actions for education field
export const CREATE_EDUCATION = "CREATE_EDUCATION";

// To create a new education in the form
export const createEducation = (education) => ({
  type: CREATE_EDUCATION,
  payload: { education },
});

// To remove an added education from the form
export const REMOVE_EDUCATION = "REMOVE_EDUCATION";

export const removeEducation = (education) => ({
  type: REMOVE_EDUCATION,
  payload: { education },
});
