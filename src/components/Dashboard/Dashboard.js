import { useState, useEffect } from "react"
import { useAuth } from '../../contexts/auth.js'
import { useProfile } from "../../contexts/useProfile.js"
import { supabase } from "../../supabase.js"
import './Dashboard.css'
import Stats from "../Stats/Stats"
import Today from "../Today/Today"
import PreviousList from "../PreviousList/PreviousList"
import ViewLoggedInUser from "../ViewLoggedInUser/ViewLoggedInUser.js"
import Footer from "../Footer/Footer.js"

function Dashboard() {
    const { user } = useAuth()
    const [codewarsData, setCodewarsData] = useState({});
    const [profile] = useProfile();
    const [updates, setUpdates] = useState([]);
    
    if (profile) {
      return (
        <main className="main">
            <div className="info">
                <Stats user={user} profile={profile} codewarsData={codewarsData} setCodewarsData={setCodewarsData}/>
                <ViewLoggedInUser profile={profile}/>
            </div>
            <div className="days">
                <Today profile={profile} updates={updates} setUpdates={setUpdates}  codewarsData={codewarsData} />
                <PreviousList user={user} updates={updates} setUpdates={setUpdates} codewarsData={codewarsData} />
                <Footer />
            </div>
        </main>
    )}
    
  }

export default Dashboard