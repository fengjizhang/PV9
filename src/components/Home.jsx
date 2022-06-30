import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../App.css';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const axios = require('axios').default;

const Header1 = () => {

  const [data, setData] = useState({
    pics: {},
    news: {}
  });

  const nasa = 'https://api.nasa.gov/planetary/apod?start_date=2022-05-06&end_date=2022-05-10&api_key=15qSrkINdU7fbHdHPZ49s4o2IXu1irdjyXMknqOF';

  const spaceNews = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=15';

  const requestOne = axios.get(nasa);
  const requestTwo = axios.get(spaceNews);

  useEffect(() => {

    axios
    .all([requestOne, requestTwo])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];

        // use/access the results
        setData({
          pics: responseOne.data,
          news: responseTwo.data
        })
      })
    )
    .catch(errors => {
      // react on errors.
      console.error(errors);
    });

  }, []);

  if (data.pics.length ) {
    return (

      <div className="carousel">
       <Carousel>
        {data.pics.map((obj, index) => {
          return (
            <Carousel.Item className="imageSpace">
            <img
              className={obj.title}
              src={data.pics[index].url}
              alt={obj.title}
              width="100%"
            />
            <Carousel.Caption>
              <h3>{data.pics[index].title}</h3>
              <p>{data.pics[index].explanation.slice(0,300)} ...</p>
            </Carousel.Caption>
            </Carousel.Item>
          )
        })}

        </Carousel>

        <Row xs={1} md={3} className="g-4" >
          {data.news.map((object, index) => (
            <Col>
              <Card style={{height: '36rem'}}>
                <Card.Img variant="top" src={object.imageUrl} width="500" height="400" />
                <Card.Body>
                  <Card.Title>{object.title}</Card.Title>
                  <Card.Text>
                    {object.summary}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  } else {
    return (
      <div>

        <p>loading...</p>
        <Spinner animation="border" />
      </div>
    )
  }


}


export default Header1;