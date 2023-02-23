import React, {useState, useEffect} from 'react';
import db from '../firebase/config';
import { Link } from 'react-router-dom';
import '../styles/animation.scss';
// icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email'
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
                  <a className='linkBtn' href='https://www.biodasturchi.uz/pages/blog.html' target='_blank' rel="noreferrer">
                    Blog
                  </a>
                </div>
              </Slide>

              <div className='socialNet'>
                <a className='links' href='mailto:info@ilosrim.uz' target='_blank' rel="noreferrer">
                  <Jump duration={1400}>
                    <EmailIcon className='github iconSvg' />
                  </Jump>
                </a>
                <a className='links' href='https://github.com/ilosrim' target='_blank' rel="noreferrer">
                  <Jump duration={1400}>
                    <GitHubIcon className='github iconSvg' />
                  </Jump>
                </a>
                <a className='links' href='https://linkedin.com/in/ilosrim' target='_blank' rel="noreferrer" >
                  <Jump duration={1300}>
                    <LinkedInIcon className='linkedin iconSvg' />
                  </Jump>
                </a>
                <a className='links' href='https://twitter.com/ilosrim' target='_blank' rel="noreferrer" >
                  <Jump duration={1200}>
                    <TwitterIcon className='twitter iconSvg' />
                  </Jump>
                </a>
                <a className='links' href='https://instagram.com/ilosrim' target='_blank' rel="noreferrer" >
                  <Jump duration={1000}>
                    <InstagramIcon className='instagram iconSvg' />
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