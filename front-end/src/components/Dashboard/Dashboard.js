import { useState, useEffect } from "react"
import { useAuth } from '../../contexts/Auth.js'
import './Dashboard.css'
import Stats from "../Stats/Stats"
import Today from "../Today/Today"
import PreviousList from "../PreviousList/PreviousList"

function Dashboard() {
    const { user } = useAuth()

    const [date, setDate] = useState()
    const [codewarsData, setCodewarsData] = useState();
    const [profile, setProfile] = useState();

    useEffect(() => {
        async function getProfile() {
            const response = await fetch(`http://localhost:3001/api/profiles/${user.id}`);
            const data = await response.json();
            setProfile(data.payload);
            console.log(data.payload)
          }
          getProfile();
      }, [])     

    useEffect(() => {
        function getDate() {
          let newDate = new Date();
          newDate = newDate.getFullYear()+"-"+(newDate.getMonth()+1)+"-"+ newDate.getDate();
          setDate(newDate);
        }
        getDate();
      }, [])
    
    return (
        <main className="main">
            <div className="info">
                <Stats date={date} user={user} profile={profile} codewarsData={codewarsData} setCodewarsData={setCodewarsData}/>
            </div>
            <div className="days">
                <Today date={date} user={user} profile={profile}/>
                <PreviousList codewarsData={codewarsData} />
            </div>
        </main>
    )
  }

export default Dashboard