import FormGroup from "./Bootstrap/FormGroup";

const Details = ({ DetailsData }) => {
  return (
    <div className="Details">
      {Object.keys(DetailsData).map((fd) => (
        <FormGroup key={fd} Label={fd} />
      ))}
    </div>
  );
};

export default Details;
