import Footer from "../Footer/Footer.js"
import LoginWithGitHubButton from '../LoginWithGitHubButton/LoginWithGitHubButton'
import './FrontPage.css'

export function FrontPage() {

  return (
  <div className='login-screen'>
    <div className='login-main'>
      <div className='login'>
        <h2>Welcome to My Days Of Code! Sign In Below:</h2>
        <LoginWithGitHubButton />
      </div>
    </div>
    <Footer />
  </div>
    
  )
}

export default FrontPage;