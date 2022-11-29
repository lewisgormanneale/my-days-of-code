import React from "react";
import "./index.css"
import { useEffect} from "react";

function Codewars({ user, codewarsData, setCodewarsData }) {

    useEffect(() => {
        async function getCompleted() {
            const response = await fetch(`https://www.codewars.com/api/v1/users/${user}/code-challenges/completed`);
            const data = await response.json();
            setCodewarsData(data.data)
        }
        getCompleted();
    }, [user, setCodewarsData]);

  return (
    <div className="codewars-completed">
      <p>{codewarsData.length} Codewars Challenges Completed All Time</p>
    </div>
  );
}

export default Codewars;