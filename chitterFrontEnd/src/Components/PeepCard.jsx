import PropTypes from "prop-types";

const PeepCard = ({ singlePeep }) => {
  const { dateCreated, name, peep, username } = singlePeep;

  return (
    <div className="w-50 py-4 border-bottom">
      <div className="d-flex align-items-center pb-1">
        <div className="fw-semibold fs-4">{name}</div>
        <div className="px-4 me-auto">@{username}</div>
        <div className="fw-lighter fs-6">
          {new Date(dateCreated).toLocaleString()}
        </div>
      </div>

      <div>{peep}</div>
    </div>
  );
};

PeepCard.propTypes = {
  singlePeep: PropTypes.shape({
    dateCreated: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    peep: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

export default PeepCard;
