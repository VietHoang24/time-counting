import React from "react";
import "./index.css";
interface ICountDownForm {
  handleFormSubmit: (e: never) => void;
  initialSeconds: number;
  handleInputChange: (e: never) => void;
}
const CountDownForm = ({
  handleFormSubmit,
  initialSeconds,
  handleInputChange,
}: ICountDownForm) => {
  return (
    <div className="countdown_form">
      <h3>Input the seconds to initiate the countdown</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="countdown_input">
          <input
            type="number"
            value={initialSeconds}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CountDownForm;
