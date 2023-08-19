import PropTypes from "prop-types";
import { useState } from "react";

const CreatePeep = ({ postPeepHandler }) => {
  const [peep, setPeep] = useState("");

  const onSubmitClick = (event) => {
    event.preventDefault();
    postPeepHandler({
      peep,
    });
    setPeep("");
  };

  return (
    <div className="w-50">
      <p className="fs-3">What&apos;s happening? </p>
      <form className="d-flex flex-column align-items-end">
        <textarea
          placeholder="What's happening? "
          type="text"
          className="w-100 mb-3"
          value={peep}
          onChange={(e) => setPeep(e.target.value)}
        />
        <button
          className="w-25"
          onClick={(event) => {
            onSubmitClick(event);
          }}
        >
          Post
        </button>
      </form>
    </div>
  );
};

CreatePeep.propTypes = {
  postPeepHandler: PropTypes.func,
};

export default CreatePeep;
