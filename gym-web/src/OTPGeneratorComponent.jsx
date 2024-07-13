import React, { useState } from 'react';
import OTPGenerator from 'otp-generator';

const OTPGeneratorComponent = () => {
  const [otp, setOTP] = useState('');

  const generateOTP = () => {
    const newOTP = OTPGenerator.generate(6, { upperCase: false, specialChars: false });
    setOTP(newOTP);
  };

  return (
    <div>
      <h2>OTP Generator</h2>
      <button onClick={generateOTP}>Generate OTP</button>
      {otp && <p>Your OTP is: {otp}</p>}
    </div>
  );
};

export default OTPGeneratorComponent;
