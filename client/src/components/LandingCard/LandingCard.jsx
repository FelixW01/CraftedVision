import './LandingCard.css';
import { Button, Typography } from 'antd';

const { Paragraph } = Typography;


function LandingCard() {
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
        <Button>Get Started</Button>
      </div>

    </section>
    </>
  )
}

export default LandingCard