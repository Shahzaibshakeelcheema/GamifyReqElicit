
import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../Avatar.png';
import './sidebar.css'
import {useNavigate} from 'react-router-dom'


const SideNav = () => {
  let navigator=useNavigate()
  const handlelogout=()=>{
    localStorage.removeItem('token')
    
    navigator('/login');
  }
  return <div className=' col-2 sidediv' >
  <ul className='styl  ' style={{}}>
    <li className='nav-item pt-4 pb-3'>
   
    <div className="btn-group dropend">
   <img   className=" dropdown-toggle  imgav" data-bs-toggle="dropdown" aria-expanded="false" src={logo} alt=""/>
 
  <ul className="dropdown-menu dm " style={{cursor:"pointer"}}>
    <li className='p-1 ps-4'> <i class="fa-solid fa-address-card fa-lg me-3"></i>Profile</li>
    <li className='p-1 ps-4' onClick={handlelogout}><i class="fa-solid fa-right-from-bracket fa-lg me-3"></i> Logout</li>

  </ul>
  
</div>





    </li>
    <li className='nav-item text-start mb-2'>
 <Link className="nav-link sn" to="/"><i class="fas fa-laptop-house fa-lg me-3"></i>Dashboard</Link></li> 

  
  <li className='nav-item text-start mb-2 '>
  <Link className="nav-link sn" to="/points"><i class="fa-solid fa-arrow-up-1-9 fa-lg me-4"></i>Points</Link></li>
  
  <li className='nav-item text-start mb-2'>
  <Link className="nav-link sn" to="/leaderboard"><i class="fa-solid fa-road-barrier fa-lg  me-3" ></i>LeaderBoard</Link></li>
  <li className='nav-item text-start mb-2'>
  <Link className="nav-link sn" to="/About"><i class="fa-solid fa-eject fa-lg  me-3" ></i>About Team</Link></li>
  <li className='nav-item text-start mb-2'>
  <Link className="nav-link sn" to="/ProjectProgress"><i class="fa-solid fa-spinner fa-lg  me-3" ></i>Project Progress</Link></li>
  <li className='nav-item text-start mb-2'>
  <Link className="nav-link sn" to="/acheivements"><i class="fa-solid fa-list-check fa-lg me-4"></i>Achievements</Link></li>

  



  </ul>
  </div>
};

export default SideNav;
