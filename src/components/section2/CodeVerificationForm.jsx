'use client'
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";


const CodeVerificationForm = ({ onVerification }) => {
  const [enteredCode, setEnteredCode] = useState("");

  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerification = async () => {
    try {
      const response = await axios.post("https://wealthup-backend-assesment.vercel.app/api/codes/use", {
        code: enteredCode,
      });
      setVerificationResult(response.data.message);
      onVerification(response.data.message);
    } catch (error) {
      console.error("Error verifying code:", error);
      setVerificationResult("Code is wrong or expired.");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        className="text-black p-2 rounded-xl"
        type="text"
        placeholder="Enter code"
        value={enteredCode}
        onChange={(e) => setEnteredCode(e.target.value)}
      />
      <button className="bg-blue-600 hover:bg-blue-500 px-8 py-2 rounded-xl" onClick={handleVerification}>
        Submit
      </button>

      {verificationResult && (
        <p className="text-red-600 bg-slate-200 p-2">{verificationResult}</p>
      )}
    </div>
  );
};

CodeVerificationForm.propTypes = {
  onVerification: PropTypes.func.isRequired,
};

export default CodeVerificationForm;
