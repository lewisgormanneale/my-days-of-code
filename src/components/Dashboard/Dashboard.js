import { useState } from "react"
import { useAuth } from '../../contexts/auth.js'
import { useProfile } from "../../contexts/useProfile.js"
import { useCodewarsData } from "../../contexts/useCodewarsData.js"
import './Dashboard.css'
import Stats from "../Stats/Stats"
import Today from "../Today/Today"
import PreviousList from "../PreviousList/PreviousList"
import ViewLoggedInUser from "../ViewLoggedInUser/ViewLoggedInUser.js"
import Footer from "../Footer/Footer.js"

function Dashboard() {
    const { user } = useAuth()
    const [profile] = useProfile();
    const [codewarsData] = useCodewarsData();
    const [updates, setUpdates] = useState([]);
    
    if (profile) {
      return (
        <main className="dashboard">
            <div className="side-panel">
                <Stats user={user} profile={profile} codewarsData={codewarsData} />
                <ViewLoggedInUser profile={profile}/>
            </div>
            <div className="main-panel">
              <div className="days">
                  <Today profile={profile} updates={updates} setUpdates={setUpdates}  codewarsData={codewarsData} />
                  <PreviousList user={user} updates={updates} setUpdates={setUpdates} codewarsData={codewarsData} />
                  <Footer />
              </div>
            </div>
        </main>
    )}
    
  }

export default Dashboard