import { CountDownLabel } from "../../type";

interface ICountDownSquare{
  label: CountDownLabel;
  number: number
}
const CountDownSquare = ({ label, number }:ICountDownSquare) => {
  return (
    <div className="countdown__card">
      <div className="countdown__card__bg">
          {number}
      </div>
      <div className="countdown__card__label">{label}</div>
    </div>
  );
};

export default CountDownSquare;
