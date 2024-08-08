import React, { useEffect, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  useEffect(() => {
    const generatePassword = () => {
      let charSet = "";
      if (includeUppercase) {
        charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (includeLowercase) {
        charSet += "abcdefthijklmnopqrstuvwxyz";
      }
      if (includeNumbers) {
        charSet += "1234567890";
      }
      if (includeSymbols) {
        charSet += "!@#$%^&*()-_=+~`{[]}|\\:;'\"<>,.?/";
      }
      let generatedPassword = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        generatedPassword += charSet[randomIndex];
      }
      setPassword(
        generatedPassword.includes("undefined") ? "" : generatedPassword
      );
    };
    generatePassword();
  }, [
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);
  return (
    <div className="bg-white min-w-[400px] p-5 rounded-lg shadow shadow-black/50">
      <h2 className="text-xl font-semibold mb-4 text-center text-[#007bff] uppercase">
        Strong Password Generator
      </h2>
      <div className="mb-4">
        <label htmlFor="num" className="block font-semibold mb-2.5">
          Password Length
        </label>
        <input
          type="number"
          id="num"
          className="w-full p-2.5 border border-[#ccc] rounded outline-none"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="upper"
          className="mr-2"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
        <label htmlFor="upper">Include Uppercase</label>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="lower"
          className="mr-2"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
        <label htmlFor="lower">Include Lowercase</label>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="numbers"
          className="mr-2"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        <label htmlFor="numbers">Include Numbers</label>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="symbols"
          className="mr-2"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
        <label htmlFor="symbols">Include Symbols</label>
      </div>
      <button
        type="button"
        className="mb-4 px-5 py-2.5 bg-[#007bff] hover:bg-[#0056b3] text-white border-none rounded"
        onClick={() => generatePassword()}
      >
        Generate Password
      </button>
      <div className="flex border border-[#ccc] rounded overflow-hidden">
        <input
          type="text"
          className="border-none outline-none flex-1 p-2.5"
          readOnly
          value={password}
        />
        <button
          type="button"
          className="border-none p-2.5 bg-green-500 text-white"
          onClick={() => {
            navigator.clipboard.writeText(password);
            alert("Password Copied");
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
