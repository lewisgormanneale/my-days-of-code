import React, { useEffect, useState } from 'react';
import './App.css';
import Today from '../Today/Today.js';
import PreviousList from '../PreviousList/PreviousList.js';
import Header from '../Header/Header.js';
import Stats from '../Stats/Stats.js';

function App() {
  const [date, setDate] = useState()
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [codewarsData, setCodewarsData] = useState({})
  
  useEffect(() => {
    function getDate() {
      let newDate = new Date();
      newDate = newDate.getFullYear()+"-"+(newDate.getMonth()+1)+"-"+ newDate.getDate();
      setDate(newDate);
    }
    getDate();
  }, [])

    useEffect(() => {
        async function getProfileById() {
          const url = `http://localhost:3001/api/profiles/${user.id}`
          const response = await fetch(url);
          const data = await response.json()
          setProfile(data.payload);
        }
        getProfileById();
      }, [user]);

  return (
    <div className="app">
      <Header user={user} setUser={setUser} />
      <main className="main">
        <div className="info">
          <Stats date={date} user={user} codewarsData={codewarsData} setCodewarsData={setCodewarsData} profile={profile}/>
        </div>
        <div className="days">
          <Today date={date} user={user}/>
          <PreviousList codewarsData={codewarsData} />
        </div>
      </main>
    </div>
  );
};

export default App;