import React from "react";
import UserCard from "./UserCard";

const User = () => {
  const userData = [
    {
      name: "Vishwa G",
      city: "Chennai",
      description: "Front-end Developer",
      skills: [
        "UI / UX",
        "Front End Developer",
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Node.js",
        "Bootstrap",
        "Tailwind CSS",
      ],
      online: true,
      profile: "https://placehold.co/125",
    },
    {
      name: "Kumar K",
      city: "Coimbatore",
      description: "Full Stack Developer",
      skills: [
        "UI / UX",
        "Full Stack Developer",
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Node.js",
        "Bootstrap",
        "Tailwind CSS",
        "MongoDB",
        "SQL",
      ],
      online: true,
      profile: "https://placehold.co/125",
    },
    {
      name: "Siva S",
      city: "Madurai",
      description: "Back-end Developer",
      skills: [
        "UI / UX",
        "Back End Developer",
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Node.js",
        "Bootstrap",
        "Tailwind CSS",
        "Java",
        "Python",
      ],
      online: false,
      profile: "https://placehold.co/125",
    },
  ];
  return (
    <>
      {userData.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          online={user.online}
          profile={user.profile}
          skills={user.skills}
        />
      ))}
    </>
  );
};

export default User;
