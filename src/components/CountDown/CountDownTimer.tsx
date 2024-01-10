import { useEffect, useState } from "react";
import { CountDownLabel } from "../../type";
import CountDownCard from "./CountDownCard";
import CountDownForm from "./CountdownForm";
import "./index.css";
const CountDownTimer = () => {
  const [initialSeconds, setInitialSeconds] = useState(0); // State để lưu giá trị giây ban đầu
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isSubmited, setIsSubmited] = useState(false);
  const handleCountdownFinish = () => {
    setIsSubmited(false);
    alert("Countdown finished!");
  };
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }
      if (hours === 0 && minutes === 0 && seconds === 0 && isSubmited) {
        handleCountdownFinish();
        clearInterval(countdownInterval)
      }
    }, 1000);
  
    return () => clearInterval(countdownInterval);
  }, [seconds, minutes, hours]);

  const handleInputChange = (event: any) => {
    setInitialSeconds(parseInt(event.target.value, 10));
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (!initialSeconds || isNaN(initialSeconds) || initialSeconds <= 0) {
      // Handle the case when the input is empty or not a valid number
      // For now, setting a default value of 0
      setInitialSeconds(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      return; // Exit the function early
    }
    setIsSubmited(true);
    setHours(Math.floor(initialSeconds / 3600));
    setMinutes(Math.floor((initialSeconds % 3600) / 60));
    setSeconds(initialSeconds % 60);
  };
  return (
    <>
      <CountDownForm
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        initialSeconds={initialSeconds}
      />
      <div className="countdown__container">
        <CountDownCard label={CountDownLabel.Hours} number={hours} />
        <CountDownCard label={CountDownLabel.Minutes} number={minutes} />
        <CountDownCard label={CountDownLabel.Seconds} number={seconds} />
      </div>
    </>
  );
};

export default CountDownTimer;
