'use client'
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";


const CodeDisplay = ({ onCodeRefresh }) => {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchCode = async () => {
    try {
      const response = await axios.get("https://wealthup-backend-assesment.vercel.app/api/codes");
      setCode(response.data.code);
      setTimer(60);
    } catch (error) {
      console.error("Error fetching code:", error);
    }
  };

  useEffect(() => {
    fetchCode();
  }, []);

  const handleRefresh = () => {
    fetchCode();
    onCodeRefresh();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="flex flex-col gap-2">
      <p>Code: {code}</p>
      <p>Time remaining: {formatTime(timer)}</p>
      <button
        className="bg-orange-600 hover:bg-orange-500 px-8 py-2 rounded-xl"
        onClick={handleRefresh}
      >
        Refresh Code
      </button>
    </div>
  );
};

CodeDisplay.propTypes = {
  onCodeRefresh: PropTypes.func.isRequired,
};

export default CodeDisplay;
