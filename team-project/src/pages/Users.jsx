import React, { useState, useEffect } from "react";
import { fetchUsers } from "../api";
import DataTable from "../components/DataTable";
import { useNavigate } from "react-router-dom";

const Users = () => {
  // State to store the list of users
  const [users, setUsers] = useState([]);
  // Hook to navigate programmatically
  const navigate = useNavigate();

  // useEffect hook to fetch users when the component mounts
  useEffect(() => {
    // Function to fetch users from the API
    const getUsers = async () => {
      // Fetch 10 users from the API
      const usersData = await fetchUsers(10);
      // Update the state with the fetched users
      setUsers(usersData);
    };
    // Call the getUsers function
    getUsers();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to handle double-click on a table row
  const handleRowDoubleClick = (user) => {
    // Navigate to the user details page, passing the user data in the state
    navigate(`/user/${user.login.uuid}`, { state: { user } });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-text">Users</h1>
      {/* DataTable reusable component to display the users */}
      <DataTable users={users} onRowDoubleClick={handleRowDoubleClick} />
    </div>
  );
};

export default Users;
