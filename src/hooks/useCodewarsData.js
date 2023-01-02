import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

export const useCodewarsData = (profileInfo) => {
  const [codewarsData, setCodewarsData] = useState({});

  useEffect(() => {
    async function getCompleted() {
      const response = await fetch(
        `https://www.codewars.com/api/v1/users/${profileInfo?.codewars_username}/code-challenges/completed`
      );
      const data = await response.json();
      setCodewarsData(data.data);
    }
    getCompleted();
  }, [profileInfo]);

  return [codewarsData, setCodewarsData];
};
