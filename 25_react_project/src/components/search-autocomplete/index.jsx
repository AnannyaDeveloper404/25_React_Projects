import { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function fetchListOfUser() {
    try {
      const resp = await fetch("https://dummyjson.com/users");
      const data = await resp.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((item) => item.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }
  useEffect(() => {
    fetchListOfUser();
  }, []);
  //   console.log(users);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setShowDropdown(true);
      setFilteredUsers(filterData);
    }
  }
  return (
    <div className="search-autocomplete-container">
      <input
        type="text"
        placeholder="Search Users"
        name="search-users"
        onChange={handleChange}
      />
      {showDropdown && <Suggestion data={filteredUsers} />}
    </div>
  );
};

export default SearchAutoComplete;
