import PropTypes from "prop-types";

import CreatePeep from "./CreatePeep";
import PeepCard from "./PeepCard";

const HomePage = ({ peeps }) => {
  // const renderAllPeeps = () => {
  //   peeps.map((peep) => {
  //     return <PeepCard key={peep.id} />;
  //   });
  // };

  return (
    <div className="d-flex flex-column align-items-center">
      <CreatePeep />

      {peeps.map((peep) => {
        return <PeepCard key={peep.id} />;
      })}
    </div>
  );
};

HomePage.PropTypes = {
  peeps: PropTypes.array,
};

export default HomePage;
