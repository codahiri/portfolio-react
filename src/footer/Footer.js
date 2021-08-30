import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Footer(props) {
  return (
    <div className="footer">
      <p className='footerTitle' ><a className='footerLogo' href='https://t.me/ilosrim'>ilosrim</a> - {new Date().getFullYear()} | Made with <FavoriteIcon /> </p>
    </div>
  );
}

export default Footer;