import React from 'react';
import { useState } from 'react';
import './index.css';

import Today from '../Today';
import PreviousList from '../PreviousList';
import Header from '../Header';


function App() {

  const [date, setDate] = useState(Date())
  const [user, setUser] = useState("lewisgormanneale")

  function getDate() {
    let newDate = new Date();
    newDate = newDate.getFullYear()+"-"+(newDate.getMonth()+1)+"-"+ newDate.getDate();
    setDate(newDate)
  }

  return (
    <div className="App">
      <Header />
      <Today date={date} user={user}/>
      <PreviousList />
    </div>
  );
}

export default App;