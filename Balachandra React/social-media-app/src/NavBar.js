import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./context/DataContext";

const NavBar = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="w-full bg-[#333] flex flex-col justify-center items-center">
      <form className="w-4/5 pt-4 pb-3" onSubmit={(e) => e.preventDefault()}>
        <label className="absolute -left-[9999px]" htmlFor="search-post">
          Search Posts
        </label>
        <input
          type="text"
          id="search-post"
          className="w-full min-h-12 text-base p-4 rounded outline-none"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className="text-white list-none flex flex-nowrap items-center">
        <li className="p-4 hover:bg-[#eee] hover:text-[#333] hover:rounded-t-full">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:bg-[#eee] hover:text-[#333] hover:rounded-t-full">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4 hover:bg-[#eee] hover:text-[#333] hover:rounded-t-full">
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
