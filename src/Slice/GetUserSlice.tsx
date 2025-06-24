// hooks/useUserData.ts
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export interface userData {
  jwtToken: string;
  name: string;
  role: string;
  userId: string;
  username: string;
}

const useUserData = (): userData | null => {
  const [userDetails, setUserDetails] = useState<userData | null>(null);

  useEffect(() => {
    const cookieData = Cookies.get("userData");
    if (cookieData) {
      try {
        const parsedData: userData = JSON.parse(cookieData);
        setUserDetails(parsedData);
      } catch (err) {
        console.error("Error parsing userData cookie:", err);
      }
    }
  }, []);

  return userDetails;
};

export default useUserData;
