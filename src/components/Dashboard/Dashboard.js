import { useState, useEffect } from "react"
import { useAuth } from '../../contexts/Auth.js'
import { supabase } from "../../supabase.js"
import './Dashboard.css'
import Stats from "../Stats/Stats"
import Today from "../Today/Today"
import PreviousList from "../PreviousList/PreviousList"
import ViewLoggedInUser from "../ViewLoggedInUser/ViewLoggedInUser.js"

function Dashboard() {
    const { user, session } = useAuth()
    const [codewarsData, setCodewarsData] = useState({});
    const [profile, setProfile] = useState({});

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
      }, [user, session])
    
    return (
        <main className="main">
            <div className="info">
                <Stats user={user} profile={profile} codewarsData={codewarsData} setCodewarsData={setCodewarsData}/>
                <ViewLoggedInUser profile={profile}/>
            </div>
            <div className="days">
                <Today user={user} profile={profile} />
                <PreviousList user={user} codewarsData={codewarsData} />
            </div>
        </main>
    )
  }

export default Dashboard