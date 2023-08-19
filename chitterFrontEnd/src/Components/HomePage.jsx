import PropTypes from "prop-types";

import CreatePeep from "./CreatePeep";
import PeepCard from "./PeepCard";

const HomePage = ({ peeps, peepsError, user, postPeepHandler }) => {
  const renderAllPeeps = () =>
    peeps.map((peep) => {
      return <PeepCard key={peep._id} singlePeep={peep} />;
    });

  return (
    <div className="d-flex flex-column align-items-center h-100">
      {user.name && <CreatePeep postPeepHandler={postPeepHandler} />}

      <div className="w-50 fs-3 border-bottom">Latest peeps</div>

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
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
  }),
  postPeepHandler: PropTypes.func,
};

export default HomePage;
