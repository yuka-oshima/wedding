import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useGetUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const router = useRouter();

  async function getUser(uuid) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/user/${uuid}`;
    const headers = {
      "Content-Type": "application/json",
    };
    setIsLoading(true);
    try {
      const response = await axios.get(url, { headers });
      setUserInfo(response.data);
    } catch (error) {
      setUserInfo([]);
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
    if (router.query.id === undefined) return;
    const uuid = router.query.id;
    getUser(uuid);
  }, [router]);

  return [isLoading, userInfo,getUser];
};

export default useGetUser;
