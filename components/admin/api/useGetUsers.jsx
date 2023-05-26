import axios from "axios";
import { useEffect, useState } from "react";

const useGetUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]); 

  async function getUsers() {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/answer`;
    const headers = {
      "Content-Type": "application/json",
    };
    setIsLoading(true);
    try {
      const response = await axios.get(url, { headers });
      setUsers(response.data);
    } catch (error) {
      setUsers([]);
      if (!error?.response) {
        console.log("Error: ", error);
      }else {
        console.log(error.response);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return [isLoading, users];
};

export default useGetUsers;
