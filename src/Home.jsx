import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
function Home() {
 const navigate= useNavigate();
  return (
     <>
        <div className="home-nav">
    <nav>
         <div>
              <img
               className="logo"
                src="https://dynamic.design.com/asset/logo/517ceb18-3220-4869-80c6-5c44f099a5f7/logo-search-grid-2x?logoTemplateVersion=1&v=638937980178100000&text=monthly+expense+tracker+&layout=auto&colorpalette=orange"
                alt="Budget Buddy Logo"
              />
            </div>
            {/* <div className="nav1">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="#">Subscriptions</Link>
            </div> */}

            <div className="home-navbar">
             <div> 
               <button type="button" style={{color:"white",backgroundColor:"#278BF5",  borderRadius:".32rem",
  outline: "none",
  border: "none",
}}>Register</button></div>

  <div>          
      <button type="button" style={{color:"black",outline: "none",border:"none",
    borderRadius:"5px", paddingLeft:"5px",paddingRight:"5px",backgroundColor:"#dfddddff"}} onClick={()=>navigate("/login")}>Login</button></div>
              <div><img
                src="https://i0.wp.com/studiolorier.com/wp-content/uploads/2018/10/Profile-Round-Sander-Lorier.jpg?ssl=1"
                width="45"
                height="45"
                alt="Profile"
              /></div>
            </div>
    </nav>
   
    </div>
  <article className='animated-bg '>
   
<div>  
  <h1>Grow Your Future</h1>  
  <h1> Sustain your Impact</h1>
  <p>An expense tracker is the foundation of smart money management. By logging every expense—big or small—it brings visibility to your financial habits.
     It helps you identify wasteful spending, stay within budget, and make informed choices. 
    
  </p>
</div>    
<div>
<img src="data:image/jpeg;base64,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"/></div> 
 </article>
 <section>
  <div class="row">
  <div class="col-sm-6 col-md-4 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
    <div class="col-sm-6 col-md-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
    <div class="col-sm-6 col-md-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
    <div class="col-sm-6 col-md-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
 </section>
   </>
  
  

  )
}

export default Home