import Experience from "./Bootstrap/Form/Experience";
import Education from "./Bootstrap/Form/Education";
import FormGroup from "./Bootstrap/FormGroup";

// Data structure for different details fields
const Details = ({ DetailsData, onChange }) => {
  const Desc = {
    FullName: [
      "text",
      "Full name",
      "Your full name will be generated by using your first and last name.",
    ],
    FirstName: ["text", "First name", "Please enter your FirstName."],
    LastName: ["text", "Last name", "Please enter your LastName."],
    Thumbnail: [
      "text",
      "Your photo",
      "Please upload your photo in a CDN like imgur and paste the direct image URL.",
    ],
    URL: [
      "text",
      "Website link",
      "Please enter the link of your project here.",
    ],
    Description: [
      "text",
      "About you",
      "Enter a short description about yourself.",
    ],
    KeyWords: [
      "text",
      "KeyWords",
      "Please enter some keywords for search engine with comma separated values (ex. name, college, your qualities etc).  ",
    ],
    Address: ["text", "Address", "Enter your full address to get kidnapped."],
    Phone: ["text", "Phone number", "Please enter your phone number."],
    Email: ["email", "Email Address", "Please enter your Email."],
  };
  return (
    <div className="Details">
      <h3>Basic Information</h3>
      {Object.keys(DetailsData).map(
        (fd) =>
          Object.keys(Desc).includes(fd) && (
            <FormGroup
              key={fd}
              Value={DetailsData[fd]}
              Label={Desc[fd][1]}
              Type={Desc[fd][1]}
              Id={fd}
              Placeholder={`Enter input for ${Desc[fd][1]}`}
              Desc={Desc[fd][2]}
              onChange={fd === "FullName" ? undefined : onChange}
              readOnly={fd === "FullName" ? true : undefined}
            />
          )
      )}
      <h3>Experience</h3>
      <Experience Experiences={DetailsData.Experience} />
      <h3>Education</h3>
      <Education Educations={DetailsData.Education} />
      <h3>Skills</h3>
      {JSON.stringify(DetailsData.Skills, null, 2)}
      <h3>Interests</h3>
      {JSON.stringify(FormData.Interests, null, 2)}
      <h3>Awards</h3>
      {JSON.stringify(FormData.Awards, null, 2)}
    </div>
  );
};

export default Details;
