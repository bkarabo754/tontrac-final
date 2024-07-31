import axios from 'axios';

// Function to fetch a specified number of users from the randomuser.me API
export const fetchUsers = async (count = 10) => {
    // Make a GET request to the randomuser.me API with the specified count
  const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
  // Log the fetched user data to the console
  console.log(response.data.results);
   
  // Return the fetched user data
  return response.data.results;
};
