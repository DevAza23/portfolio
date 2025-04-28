
import './secone.css'
import a from '../assets/a.png'
import g from '../assets/g.png'
import t from '../assets/t.png'
function sectionOne() {
  return (
    <div className='basa'>
      
      <div className="shits">
        <div className="projects">
          <a href="https://gl-webr.vercel.app/" target="_blank" rel="noopener noreferrer"> <img src={a} alt="" />   <h4>Start project</h4>
      </a>
   
        
        </div>
        <div className="projects">
          <a href="https://start-companyig-git-main-devaza23s-projects.vercel.app/index.html" target="_blank" rel="noopener noreferrer"><img src={g} alt="" />
          <h4>Google store project</h4></a>
      
         
      </div>
      <div className="projects">
        <a href="https://taffein-aza-5zvn.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={t} alt="" />
          <h4>Google store project</h4>
         </a>
      
      </div>
       
     
    </div>
    </div>
  )
}

export default sectionOne
