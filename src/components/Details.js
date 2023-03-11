import FormGroup from "./Bootstrap/FormGroup";

const Details = ({ DetailsData }) => {
  return (
    <div className="Details">
      {Object.keys(DetailsData).map((fd) => (
        <FormGroup />
      ))}
    </div>
  );
};

export default Details;
