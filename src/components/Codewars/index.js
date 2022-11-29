import React from "react";
import "./index.css"
import { useEffect, useState } from "react";

function Codewars({date, user}) {

    useEffect(() => {
        async function getCompleted() {
            const response = await fetch(`https://www.codewars.com/api/v1/users/${user}/code-challenges/completed`);
            const data = await response.json();
            console.log(data);
        }
        getCompleted();
    }, []);

  return (
    <div className="codewars-completed">
    </div>
  );
}

export default Codewars;