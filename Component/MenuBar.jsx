import { Link } from "react-router-dom";


function MenuBar()
{
  
  return(
    <div className="header">
      
      <img className="logo-main" src="./src/main logo.png"a lt="" />
      {/* <h1>MyEcommerce Site!</h1> */}
      <div className='menu'>
        <div className="menuCon">
          
            <Link to='/home'>Home</Link>
           
            <Link  to='/account'>Account</Link>
         
            <Link  to='/about'> About</Link>
            <Link className="loginB" to='/' >Login</Link>
          
            {/* <div className="dot"></div>  */}
          </div>

        
      </div>
    </div>
      
    )
}
export default MenuBar;