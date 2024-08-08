import React, { useState } from "react";

const UsersDetails = () => {
  const [user, setUser] = useState({
    fname: "First Name",
    lname: "Last Name",
    age: "Age",
  });
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1>{`${user.fname} ${user.lname}, ${user.age}`}</h1>
      <form>
        <input
          type="text"
          placeholder="Enter Your First Name"
          name="fname"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Enter Your Last Name"
          name="lname"
          onChange={changeHandler}
        />
        <input
          type="number"
          placeholder="Enter Your Age"
          name="age"
          onChange={changeHandler}
        />
      </form>
    </>
  );
};

export default UsersDetails;
