import './Sidebar.css';
import { FaCubes } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="./src/assets/images/flogo.png" alt="Logo" />
      </div>
      <div className="sidebar-nav">
      
          <img src="./src/assets/images/profile.png" alt="" />
          <div className="sidebar">
      <button className="sidebar-button orange">
      
      <i className="fa fa-cubes"></i>
      <FaCubes />
        Products
       
      </button>
      <div className="sidebar-item">
        <i className="fa fa-bookmark"></i>
        <CiBookmark />
        Favorites
      
      </div>
      <div className="sidebar-item">
        <i className="fa fa-bookmark"></i>
        <CiBookmark />
        Order List
      </div>
      <br />
      <br />
      <br /><br /><br /><br /><br /><br />
      <div className="sidebar-item">
        <i className="fa fa-bookmark"></i>
        <CiLogout />
       logout
      </div>
</div>
  </div>
    </div>
  );
};
export default Sidebar;