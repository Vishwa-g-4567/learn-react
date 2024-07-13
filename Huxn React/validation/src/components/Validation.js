import React, { useState } from "react";

const Validation = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorconfirmPassword, setErrorconfirmPassword] = useState("");
  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");
  const validate = (e) => {
    e.preventDefault();
    if (userName.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be 8 letters");
      setUserColor("red");
    }
    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Email should have @gmail.com");
      setEmailColor("red");
    }
    if (password.length >= 16) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 16 letters");
      setPasswordColor("red");
    }
    if (password != "" && password == confirmPassword) {
      setErrorconfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorconfirmPassword("Password didn't matched");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <>
      <div className="bg-[#f3fffe] grid grid-cols-2 w-[50rem] h-[30rem] shadow shadow-[rgb(255,255,223)]">
        <div className="bg-[url('https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')] bg-center bg-cover"></div>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={validate}
        >
          <input
            style={{ borderColor: userColor }}
            className="border p-2.5 m-1 w-[20rem] bg-transparent border-b-[#ccc] rounded"
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p className="font-sans text-red-500">{errorUserName}</p>
          <input
            style={{ borderColor: emailColor }}
            className="border p-2.5 m-1 w-[20rem] bg-transparent border-b-[#ccc] rounded"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="font-sans text-red-500">{errorEmail}</p>
          <input
            style={{ borderColor: passwordColor }}
            className="border p-2.5 m-1 w-[20rem] bg-transparent border-b-[#ccc] rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="font-sans text-red-500">{errorPassword}</p>
          <input
            style={{ borderColor: confirmPasswordColor }}
            className="border p-2.5 m-1 w-[20rem] bg-transparent border-b-[#ccc] rounded"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="font-sans text-red-500">{errorconfirmPassword}</p>
          <button
            className="w-4/5 mt-5 bg-[rgb(255,90,123)] text-white font-bold px-5 py-2.5 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Validation;
