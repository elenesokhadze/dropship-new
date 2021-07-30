import "./spinner.css";

const Spinner = () => {
  return (
    <div className="loading">
      <span className="loading__dot"></span>
      <span className="loading__dot"></span>
      <span className="loading__dot"></span>
    </div>
  );
};

export default Spinner;
