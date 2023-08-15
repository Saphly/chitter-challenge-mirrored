import PropTypes from "prop-types";

import CreatePeep from "./CreatePeep";
import PeepCard from "./PeepCard";

const HomePage = ({ peeps, peepsError }) => {
  const renderAllPeeps = () =>
    peeps.map((peep) => {
      return <PeepCard key={peep._id} singlePeep={peep} />;
    });

  return (
    <div className="d-flex flex-column align-items-center h-100">
      <CreatePeep />

      {peepsError.message ? (
        <div className="pt-5">{peepsError.message}</div>
      ) : (
        renderAllPeeps()
      )}
    </div>
  );
};

HomePage.propTypes = {
  peeps: PropTypes.array,
  peepsError: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
  }),
};

export default HomePage;
