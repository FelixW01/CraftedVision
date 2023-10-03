import './DashboardCards.css';
import { useCurrentUserContext } from '../../context/CurrentUser';
import { Carousel } from 'antd';

 function Header() {
  const { isLoggedIn, logoutUser } = useCurrentUserContext();

  return (
    <>
        <div className="profile-div">
            <div className="img-div">
                <img src="images/profile.jpg" className="profile-img"></img>
            </div>
            <div className="profile-info">
                <div><h7>Felix Willem</h7></div>
                <div><h7>Web Developer</h7></div>
                <div><h7>UNC Chapel Hill</h7></div>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
            </div>
        </div>
        <div className="showcase-card">
            <Carousel autoplay className="carousel-div">
            <div className="container">
                <img src="images/yuki.jpg" className="carousel"></img>
            </div>
            <div className="container">
                <img src="images/mountain.jpg" className="carousel"></img>
            </div>
            <div className="container">
                <img src="images/green.jpg" className="carousel"></img>
            </div>
            <div className="container">
                <img src="images/yuki2.jpg" className="carousel"></img>
         </div>
            </Carousel>
        </div>
    </>
    
  );
 }

 export default Header