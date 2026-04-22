import axios from "axios";
 export const getUsers = async () => {
    const response =await axios.get(
       "https://jsonplaceholder.typicode.com/users"
      // "https://jsonplaceholder.typicode.com/users123888"  .....failed to load error
    );
    return response.data;
 };