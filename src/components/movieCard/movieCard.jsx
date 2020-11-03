import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import './movieCard.css'
import { BsFillCaretRightFill } from "react-icons/bs";
import Rate from '../rate/rate'


function movieCard({ movies }) {
  return (
    <div>
      <Card className="card" style={{ width: "18rem", height: "" }}>
        <Card.Text>
        
          <img src={movies.portrait} alt="pic" width="100%"></img>
        </Card.Text>
        <Card.Body>
          <ul>
              <li>Release date : {movies.date}</li>
              <li>||</li>
              <li> <Rate rating= {movies.rate} />  </li>
          </ul>
          <Card.Title className="title"> {movies.title} </Card.Title>
         
          <Card.Text>{movies.descreption}...</Card.Text>
          <a href="/">Read more</a>
        </Card.Body>
        <Button id="button"> <BsFillCaretRightFill /> Watch trailer </Button>
      </Card>
    </div>
  );
}

export default movieCard;
