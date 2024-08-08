import React, { useState } from "react";

const DynamicInput = () => {
  const [user, setUser] = useState({
    name: "Vishwa G",
    age: 20,
    gender: "Male",
    isMarried: false,
    country: "Select Country",
    bio: "Write something about yourself",
  });
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua & Deps",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Rep",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo {Democratic Rep}",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland {Republic}",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea North",
    "Korea South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar, {Burma}",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "St Kitts & Nevis",
    "St Lucia",
    "Saint Vincent & the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return (
    <>
      <table className="border border-[#ccc] border-collapse">
        <tbody>
          <tr>
            <th className="border border-[#ccc] px-5 py-2.5 text-left">Name</th>
            <td className="border border-[#ccc] px-5 py-2.5">{user.name}</td>
          </tr>
          <tr>
            <th className="border border-[#ccc] px-5 py-2.5 text-left">Age</th>
            <td className="border border-[#ccc] px-5 py-2.5">{user.age}</td>
          </tr>
          <tr>
            <th className="border border-[#ccc] px-5 py-2.5 text-left">
              Gender
            </th>
            <td className="border border-[#ccc] px-5 py-2.5">{user.gender}</td>
          </tr>
          <tr>
            <th className="border border-[#ccc] px-5 py-2.5 text-left">
              Marital Status
            </th>
            <td className="border border-[#ccc] px-5 py-2.5">
              {user.isMarried ? "Married" : "Not Married"}
            </td>
          </tr>
          <tr>
            <th className="border border-[#ccc] px-5 py-2.5 text-left">
              Country
            </th>
            <td className="border border-[#ccc] px-5 py-2.5">{user.country}</td>
          </tr>
          <tr>
            <th className="border border-[#ccc] px-5 py-2.5 text-left">Bio</th>
            <td className="border border-[#ccc] px-5 py-2.5">{user.bio}</td>
          </tr>
        </tbody>
      </table>
      <form className="w-60 mt-2.5 flex flex-col gap-2.5">
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Enter your name"
          onChange={changeHandler}
        />
        <input
          type="number"
          name="age"
          value={user.age}
          placeholder="Enter your age"
          onChange={changeHandler}
        />
        <div>
          <label htmlFor="male">
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={user.gender == "Male"}
              onChange={changeHandler}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={user.gender == "Female"}
              onChange={changeHandler}
            />
            Female
          </label>
        </div>
        <label htmlFor="isMarried">
          <input
            type="checkbox"
            id="isMarried"
            name="isMarried"
            checked={user.isMarried}
            onChange={changeHandler}
          />
          Is Married
        </label>
        <div>
          <label htmlFor="country">Select Country</label>
          <select
            name="country"
            id="country"
            value={user.country}
            onChange={changeHandler}
          >
            <option value="">-- Select Country --</option>
            {countries.map((country) => (
              <option key={Math.random()} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <textarea
          name="bio"
          id="bio"
          cols="30"
          rows="5"
          placeholder="Write something about yourself"
          value={user.bio}
          onChange={changeHandler}
        ></textarea>
      </form>
    </>
  );
};

export default DynamicInput;
