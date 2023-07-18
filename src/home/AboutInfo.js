import React, {useState, useEffect} from 'react';
import db from '../firebase/config';
import { Link } from 'react-router-dom';
import '../styles/animation.scss';
// icons
import { GitHub, LinkedIn, Twitter, Instagram, Email, YouTube } from '@material-ui/icons';
// animations
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';

function AboutInfo() {

  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    db.collection("portfolio").onSnapshot((snapshot) => 
      setPortfolios(snapshot.docs.map(doc => doc.data()))
    )
  }, []);


  return (
    <div>
      {
        portfolios.map(portfolio => (
          <div key={Date.now()} className='aboutinfo'>
            <div className='side2'>
              <Zoom duration={1500}>
                <img className='myImage' src={portfolio.image} alt='my pic.' />
              </Zoom>
            </div>
            <div className='side1'>

              <Slide left duration={1000}>
                <h1 className='title' >{portfolio.title}</h1>
                <p className='description' >{portfolio.description}</p>
              </Slide>

              <Slide left duration={1000}>
                <div className='buttons'>
                  <Link className='linkBtn' to='/about'>
                    About me
                  </Link>
                  <a className='linkBtn' href='https://www.biodasturchi.uz' target='_blank' rel="noreferrer">
                    Blog
                  </a>
                </div>
              </Slide>

              <div className='socialNet'>
                <a className='links' href='mailto:ilosrim@yahoo.com' target='_blank' rel="noreferrer">
                  <Jump duration={1400}>
                    <Email className='email iconSvg' />
                  </Jump>
                </a>
                <a className='links' href='https://github.com/ilosrim' target='_blank' rel="noreferrer">
                  <Jump duration={1400}>
                    <GitHub className='github iconSvg' />
                  </Jump>
                </a>
                <a className='links' href='https://linkedin.com/in/mirjr' target='_blank' rel="noreferrer" >
                  <Jump duration={1300}>
                    <LinkedIn className='linkedin iconSvg' />
                  </Jump>
                </a>
                <a className='links' href='https://twitter.com/mirjr17' target='_blank' rel="noreferrer" >
                  <Jump duration={1200}>
                    <Twitter className='twitter iconSvg' />
                  </Jump>
                </a>
                <a className='links' href='https://instagram.com/mirjr17' target='_blank' rel="noreferrer" >
                  <Jump duration={1000}>
                    <Instagram className='instagram iconSvg' />
                  </Jump>
                </a>
                <a className='links' href='https://youtube.com/@mirjr17' target='_blank' rel="noreferrer" >
                  <Jump duration={1000}>
                    <YouTube className='instagram iconSvg' />
                  </Jump>
                </a>
              </div>
            </div>
          </div>
          
        ))
      }
    </div>
  );
}

export default AboutInfo;