import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useGetUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const router = useRouter();

  async function getUser(id) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/user/${id}`;
    const headers = {
      "Content-Type": "application/json",
    };
    setIsLoading(true);
    try {
      const response = await axios.get(url, { headers });
      setUserData(response.data);
    } catch (error) {
      setUserData([]);
      if (!error?.response) {
        console.log("Error: ", error);
      } else {
        console.log(error.response);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (router.query.id === undefined) return;
    const uuid = router.query.id;
    getUser(uuid);
  }, [router]);

  return [isLoading, userData, getUser];
};

export default useGetUser;
