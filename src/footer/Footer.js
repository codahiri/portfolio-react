import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Footer(props) {
  return (
    <div className="footer">
      <p className='footerTitle' >
        <a className='footerLogo' href='mailto:info@ilosrim.uz' target='_blank' rel="noreferrer" >&copy; ilosrim </a> 2021 - {new Date().getFullYear()} | Made with <FavoriteIcon className='heartIcon' />
      </p>
    </div>
  );
}

export default Footer;