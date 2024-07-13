import React from 'react';

const generateOTP = (length) => {
  const charset = '0123456789';
  let OTP = '';
  for (let i = 0; i < length; i++) {
    OTP += charset[Math.floor(Math.random() * charset.length)];
  }
  return OTP;
};

const OTPGenerator = () => {
  const otpLength = 6; // You can adjust the length of OTP as per your requirement
  const generatedOTP = generateOTP(otpLength);

  return (
    <div>
      <h2>Generated OTP:</h2>
      <p>{generatedOTP}</p>
    </div>
  );
};

export default OTPGenerator;
