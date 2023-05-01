import { useState, useEffect } from "react";

const Timer = (props: any) => {
  const resendOTP = () => {
    setMinutes(0);
    setSeconds(30);
  };

  const { initialMinute = 0, initialSeconds = 30 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      <div className="font-regular text-center text-appGray">
        {minutes === 0 && seconds === 0 ? null : (
          <>
            Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </>
        )}
      </div>
      <button
        disabled={seconds > 0 || minutes > 0}
        className="font-regular"
        style={{
          color: seconds > 0 || minutes > 0 ? "#9e9e9e" : "#525252",
        }}
        onClick={resendOTP}
      >
        Resend OTP
      </button>
    </>
  );
};

export default Timer;
