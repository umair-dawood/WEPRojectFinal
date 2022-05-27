import './SideNav.css';
import React ,{useEffect,useState} from 'react'
import {Outlet,useNavigate} from 'react-router-dom'
import Login from '../Login/Login';
import { faCartPlus,faPowerOff,faWarehouse,faTv,faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SideNav = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });


    const navigate=useNavigate();

   function handleClick(path){
     navigate(path);
   }

    function refreshforlogout(){
        window.location.reload(false);
    }
  


            const [token,setToken]=useState();
            if(!token) {
                return <Login setToken={setToken} />
              }
              
    
        let temp=localStorage.getItem("username");
      

   return (

     <div  >
         <div className="topnav">
  <p className="active" style={{fontWeight:'normal'}}>{temp}</p>
  <p >{date.toLocaleTimeString()}</p>
  <p >{date.toLocaleDateString()}</p>
</div>
   <div className="area"></div><nav className="main-menu">
            <ul>
                <li>
                    <a className="nameofbrand" onClick={() => handleClick("DashBoard")}>
                        <i className="fas"></i>
                        <span style={{color:'white',fontSize:'15px'}} className="nav-text">
                            Home Electronics
                        </span>
                    </a>
                  
                </li>
                <li className="has-subnav">
                    <a onClick={() => handleClick("Salesparent")}>
                        <FontAwesomeIcon className="fas" icon={faCartPlus}/>
                        <span className="nav-text">
                            Point Of Sales
                        </span>
                    </a>
                  
                </li>
                <li className="has-subnav">
                    <a  onClick={() => handleClick("Warehouse")}>
                    <FontAwesomeIcon className="fas" icon={faWarehouse}/>
                        <span className="nav-text">
                            Warehouse Management
                        </span>
                    </a>
                    
                </li>
              
             
           

            

                <li className="has-subnav">
                    <a  onClick={() => handleClick("ItemDetails")}>
                    <FontAwesomeIcon className="fas" icon={faTv}/>
                        <span className="nav-text">
                            Item Management
                        </span>
                    </a>
                   
                </li>
              
              
              
                <li className="has-subnav">
                    <a  onClick={() => handleClick("Settings")}>
                    <FontAwesomeIcon className="fas" icon={faCogs}/>
                        <span className="nav-text">
                            Settings
                        </span>
                    </a>
                   
                </li>
            </ul>

            <ul className="logout">
                <li>
                   <a onClick={refreshforlogout}>
                   <FontAwesomeIcon className="fas" icon={faPowerOff}/>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
        <Outlet />
 </div>
       
   )
 }
 export default SideNav;