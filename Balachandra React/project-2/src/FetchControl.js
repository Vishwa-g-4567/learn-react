import React from "react";
import Button from "./Button";

const FetchControl = ({ reqType, setReqType, setIsLoading }) => {
  return (
    <form
      className="w-full flex items-center justify-between my-5"
      onSubmit={(e) => e.preventDefault()}
    >
      <Button
        buttonText="users"
        reqType={reqType}
        setReqType={setReqType}
        setIsLoading={setIsLoading}
      />
      <Button
        buttonText="posts"
        reqType={reqType}
        setReqType={setReqType}
        setIsLoading={setIsLoading}
      />
      <Button
        buttonText="comments"
        reqType={reqType}
        setReqType={setReqType}
        setIsLoading={setIsLoading}
      />
    </form>
  );
};

export default FetchControl;
