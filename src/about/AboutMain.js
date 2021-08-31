import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import db from '../firebase/config';

function AboutMain(props) {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    db.collection("about").onSnapshot((snapshot) =>
      setAbouts(snapshot.docs.map(doc => doc.data()))
    )
  }, []);

  return (
    <div className='about-main'>
      <Container>
        <Row>
          <Col md='6'>
              {
                abouts.map(about => (
                  <div className='about-img'>
                    <img src={about.image} alt='My personal pic.' />
                  </div>
                ))
              }
          </Col>
          <Col md='6'>
            <div className='about-info'>
                <p>Hello dear ! I'm Mirsoli Mirsutonov and I'm 23 years old. I'm from Uzbekistan, I live in Fergana.</p>
                <p>I started frontend training independently in October 2020, and from April 2021 I took a 5-month course at PDP IT Academy. Now I have enough skills from HTML, CSS, SCSS, Bootstrap, jQuery, JavaScript, React JS, Redux JS technologies.</p>
                <p>I like my job and I will be very happy if I solve the given problems quickly.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMain;