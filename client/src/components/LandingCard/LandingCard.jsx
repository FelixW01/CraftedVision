import './LandingCard.css';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Paragraph } = Typography;

function LandingCard() {
const navigate = useNavigate()
function handleClick() {
    navigate('/register')
  }

  return (
    <>
    <section className="landing">

      <div className="landing-div">
        <img className="logo" src="images/logo.png"></img>
      </div>

      <div className="landing-div">
        <Paragraph className="paragraph">Your Creative Journey, Our Professional Showcase</Paragraph>
      </div>

      <div className="landing-div">
        <Button type='primary' shape='round' onClick={handleClick} className="start-btn">Get Started</Button>
      </div>

    </section>
    </>
  )
}

export default LandingCard