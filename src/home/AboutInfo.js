import React, {useState, useEffect} from 'react';
import db from '../firebase/config';
import { Link } from 'react-router-dom';
// icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function AboutInfo() {

  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    db.collection("portfolio").onSnapshot((snapshot) => 
      setPortfolios(snapshot.docs.map(doc => doc.data()))
    )
  }, []);


  return (
    <div className='aboutinfo'>
      {
        portfolios.map(portfolio => (
          <>
            <div className='side2'>
              <img src={portfolio.image} alt='my image' />
            </div>
            <div className='side1'>
              <h1 className='title' >{portfolio.title}</h1>
              <p className='description' >{portfolio.description}</p>
              <div className='buttons'>
                <Link className='linkBtn' to='/'>
                  About me
                </Link>
                <Link className='linkBtn' to='/'>
                  Portfolio
                </Link>
              </div>

              <div className='socialNet'>
                <a href='https://github.com/ilosrim' target='_blank'>
                  <GitHubIcon className='github' />
                </a>
                <a href='https://linkedin.com/in/ilosrim' target='_blank'>
                  <LinkedInIcon className='linkedin' />
                </a>
                <a href='https://twitter.com/ilosrim' target='_blank'>
                  <TwitterIcon className='twitter' />
                </a>
                <a href='https://instagram.com/ilosrim' target='_blank'>
                  <InstagramIcon className='instagram' />
                </a>
              </div>
            </div>
          </>
        ))
      }
    </div>
  );
}

export default AboutInfo;