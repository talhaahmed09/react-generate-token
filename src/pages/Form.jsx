import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { getToken } from "../services/service";
import List from "../components/List";

const Form = () => {
  const [tokenDigits, setTokenDigits] = useState("");
  const [token, setToken] = useState([]);

  const handleInputChange = (event) => {
    const input = event.target.value;
    const sanitizedInput = input.replace(/[^0-9]/g, ""); // Remove non-digits

    let formattedInput = "";
    for (let i = 0; i < sanitizedInput.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedInput += "-";
      }
      formattedInput += sanitizedInput[i];
    }

    setTokenDigits(formattedInput);
  };

  const handleClick = async (event) => {
    event.preventDefault();

    if (!tokenDigits) return;

    const response = await getToken(tokenDigits);
    const newTokenList = [...token];
    newTokenList.push(response);
    setToken([...newTokenList]);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Token Generator
        </h2>
      </div>
      <div classNameName="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form classNameName="space-y-2">
          <InputField value={tokenDigits} onChange={handleInputChange} />

          <Button onClick={handleClick} />

          {token.length > 0 ? (
            <List token={token} />
          ) : (
            <p>Generate a token to display</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
