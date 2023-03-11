import FormGroup from "./Bootstrap/FormGroup";

const Details = ({ DetailsData, onChange }) => {
  const Desc = {
    FullName: ["text", "Full name", "Your full name."],
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
      "Please enter the link of your portfolio here once you host it.",
    ],
    Description: [
      "text",
      "About you",
      "Enter a short description about yourself.",
    ],
    KeyWords: [
      "text",
      "KeyWords",
      "Please enter some keywords for search engine.",
    ],
    Address: ["text", "Address", "Enter your full address to get kidnapped."],
    Phone: ["text", "Phone number", "Please enter your phone number."],
    Email: ["email", "Email Address", "Please enter your Email."],
  };
  return (
    <div className="Details">
      {Object.keys(DetailsData).map((fd) => (
        <FormGroup
          key={fd}
          Label={Desc[fd][1]}
          Type={Desc[fd][1]}
          Id={fd}
          Desc={Desc[fd][2]}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default Details;
