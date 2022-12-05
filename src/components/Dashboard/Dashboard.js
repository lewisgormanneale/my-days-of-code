import { useState, useEffect } from "react"
import { useAuth } from '../../contexts/Auth.js'
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
    const [profile, setProfile] = useState({});
    const [updates, setUpdates] = useState([]);

    useEffect(() => {
        async function getProfile() {
          if (user) {
            const { data, error } = await supabase
              .from('profiles')
              .select('id, full_name, username, codewars_username, avatar_url')
            if (error) {
                console.log(error)
            } else {
                setProfile(data[0]);
            };
          };
        };
        getProfile();
      }, [user])
    
    if (profile) {
      return (
        <main className="main">
            <div className="info">
                <Stats user={user} profile={profile} codewarsData={codewarsData} setCodewarsData={setCodewarsData}/>
                <ViewLoggedInUser profile={profile}/>
            </div>
            <div className="days">
                <Today profile={profile} updates={updates} setUpdates={setUpdates} />
                <PreviousList user={user} updates={updates} setUpdates={setUpdates} codewarsData={codewarsData} />
                <Footer />
            </div>
        </main>
    )}
    
  }

export default Dashboard