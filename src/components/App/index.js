import React from 'react';
import { useState } from 'react';
import './index.css';

import Today from '../Today';
import PreviousList from '../PreviousList';
import Header from '../Header';
import Stats from '../Stats';


function App() {

  const [date, setDate] = useState(Date())
  const [user, setUser] = useState("lewisgormanneale")
  const [codewarsData, setCodewarsData] = useState({})

  function getDate() {
    let newDate = new Date();
    newDate = newDate.getFullYear()+"-"+(newDate.getMonth()+1)+"-"+ newDate.getDate();
    setDate(newDate)
  }

  return (
    <div className="App">
      <Header />
      <Today date={date} user={user}/>
      <Stats date={date} user={user} codewarsData={codewarsData} setCodewarsData={setCodewarsData}/>
      <PreviousList />
    </div>
  );
}

export default App;