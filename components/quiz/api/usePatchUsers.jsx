import axios from "axios";
import { useState } from "react";

const usePatchUsers = () => {
  const [isPatchLoading, setIsLoading] = useState(false);
  async function patchUsers(uuid,score) {
    const headers = {
      "Content-Type": "application/json",
    };
    const body = {
        correct: score,
        status:1,
    };
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/user/${uuid}`;
    try {
      await axios.patch(url, body, {
        headers: headers,
      });
    } catch (error) {
      if (!error?.response) {
        console.log("Error: ", error);
      }else {
        console.log(error.response);
      }
    } finally {
      setIsLoading(false);
    }
  }
  return [patchUsers, isPatchLoading];
};

export default usePatchUsers;
