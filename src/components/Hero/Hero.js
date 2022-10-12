
import Card from 'react-bootstrap/Card';
import './Hero.css'

const Hero = () => {

  return (
    <div className='mb-5'>
      <Card className="bg-dark text-white">
        <Card.Img className="hero-pic" src="https://ahaslides.com/wp-content/uploads/2020/05/SEO1044-02.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className='fs-2'>QuizGame</Card.Title>
        </Card.ImgOverlay>
      </Card>

    </div>
  );
};

export default Hero;

