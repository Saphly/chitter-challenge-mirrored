import CreatePeep from "./CreatePeep";
import PeepCard from "./PeepCard";

const HomePage = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <CreatePeep />

      <PeepCard />
      <PeepCard />
      <PeepCard />
      <PeepCard />
    </div>
  );
};

export default HomePage;
