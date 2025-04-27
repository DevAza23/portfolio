import profile from '../assets/profile.jpg'
import './nav.css'

function navbar() {
  return (
    <div className="profile-container">
      <div className="profile-main">
        <div className="profile-content">
          <h1>Hi, Azamat here</h1>
          <p className="subtitle">17 year old simply guy</p>
          
          <div className="about-section">
            <h2>About</h2>
            <p>Software engineer, back-end developer, ML/LLM enthusiast.</p>
            
            <p>I like technology and deep science — they make a dent in the universe.</p>
            
            <p>I love Formula 1, movies, history, and great books.</p>
            
            <p>if you'd like to connect over a chat, <a href="https://t.me/azamatcaps">chat with me here!</a></p>
          </div>
        </div>
        
        <div className="profile-image">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </div>
  )
}

export default navbar

