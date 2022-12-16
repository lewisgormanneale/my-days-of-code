import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

export const useCodewarsData = () => {
  const { profile } = useAuth();
  const [codewarsData, setCodewarsData] = useState({});

  useEffect(() => {
    async function getCompleted() {
      const response = await fetch(
        `https://www.codewars.com/api/v1/users/${profile.codewars_username}/code-challenges/completed`
      );
      const data = await response.json();
      setCodewarsData(data.data);
    }
    getCompleted();
  }, [profile]);

  return [codewarsData, setCodewarsData];
};
