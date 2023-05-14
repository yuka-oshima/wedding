import axios from "axios";
import { useState } from "react";

const usePatchUsers = () => {
  const [isPatchLoading, setIsLoading] = useState(false);
  async function patchUsers(id, score) {
    const headers = {
      "Content-Type": "application/json",
    };
    const body = {
      id: id,
      correct: score,
      status: 1,
    };
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/user/${id}`;
    try {
      await axios.patch(url, body, {
        headers: headers,
      });
    } catch (error) {
      if (!error?.response) {
        console.log("Error: ", error);
      } else {
        console.log(error.response);
      }
    } finally {
      setIsLoading(false);
    }
  }
  return [patchUsers, isPatchLoading];
};

export default usePatchUsers;
