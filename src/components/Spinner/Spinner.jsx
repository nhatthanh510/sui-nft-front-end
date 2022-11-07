const Spinner = ({ text }) => {
  return (
    <button type="button" className="bg-indigo-500" disabled>
      <svg className="mr-3 h-5 w-5 animate-spin" viewBox="0 0 24 24"></svg>
      {text || "Loading..."}
    </button>
  );
};

export default Spinner;
