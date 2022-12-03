import React from "react";
import "./Codewars.css"
import { useEffect} from "react";

function Codewars({ codewars_username, codewarsData, setCodewarsData }) {

  useEffect(() => {
    async function getCompleted() {
        const response = await fetch(`https://www.codewars.com/api/v1/users/${codewars_username}/code-challenges/completed`);
        const data = await response.json();
        setCodewarsData(data.data)
    }
    getCompleted();
  }, [codewars_username, setCodewarsData]);

  if (codewars_username) {
    return (
      <div className="codewars-completed">
        <p>{codewarsData.length} Codewars Challenges Completed</p>
        <img src={"https://www.codewars.com/users/" + codewars_username + "/badges/micro"} alt={codewars_username}></img>
      </div>
    );
    } else {
    return (
      <div></div>
    )
  }

  
}

export default Codewars;