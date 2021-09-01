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
          <Col md='12' sm='12'>
            <div className='about-info'>
              {
                abouts.map(about => (
                  <>
                    <div className='about-img'>
                      <img src={about.image} alt='My personal pic.' />
                    </div>
                    <div className='about-texts'>
                      <p>{about.textOne}</p>
                      <p>{about.textTwo}</p>
                      <p>{about.textThree}</p>
                    </div>
                  </>
                ))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMain;