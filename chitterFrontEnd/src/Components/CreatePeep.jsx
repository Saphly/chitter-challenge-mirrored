const CreatePeep = () => {
  return (
    <div className="w-50">
      <p className="fs-5">What&apos;s happening? </p>
      <form className="d-flex flex-column align-items-end">
        <textarea
          placeholder="What's happening? "
          type="text"
          className="w-100 mb-3"
        />
        <button className="w-25">Submit</button>
      </form>
    </div>
  );
};

export default CreatePeep;
