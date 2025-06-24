import React,{useContext} from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const MovieCard =({_id,image,name,ticketprice,title,releasedate,budget,director}) => {
      const { updateCart } = useContext(CartContext);
     //const { addToCart } = useContext(CartContext);
     const navigate = useNavigate();

  return (
    <>
     <Card

    hoverable
     style={{ 
      height: '100%',
      width:'100%',
      display:'flex',
      flexDirection: 'column', 
      border:'1px solid black',
      color:'white', }}
     cover={
       <Link to={`/movie/${_id}`} >
    <img
      src={image}
      alt={name}
      style={{ width: '100%', height:"500px",objectFit: "cover" }}
     />
        </Link>
    }
  >
    <h5 style={{textAlign:"center",color:'green'}}><strong>{name}</strong></h5>
 <div 
        style={{
        
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          textAlign: 'start',
          color:'black'
    
          
        }}
      >
      <p><strong>Ticket Price:</strong> ₹{ticketprice }</p>
       <p><strong>Title:</strong> {title}</p>
      <p><strong>Director:</strong> {director}</p>
       <p><strong>Budget:</strong> {budget}</p>
        <p><strong>Release Date:</strong> {releasedate}</p>
        </div>
      <div className="d-flex justify-content-between mt-3 gap-2"></div>  
        <button
  className="btn btn-success flex-fill "
  onClick={() => navigate(`/movie/${_id}`)}
>
  Book Ticket
</button>
       {/* <button className="btn btn-success ms-4"onClick={() => addToCart({_id,
    image,
    name,
    ticketprice,
    title,
    releasedate,
    budget,
    director})} >
            Add to Cart
          </button>*/}
          
          <button
  className="btn btn-success  flex-fill ms-1"
  onClick={() => {
    updateCart('add', {
      _id,
      image,
      name,
      ticketprice,
      title,
      releasedate,
      budget,
      director,
      
    });
    navigate('/cart')
    toast.success(`${name} added to cart!`);
   
  }}
>
  Add to Cart
</button>

 
  </Card>
  </>
);
  
}

export default MovieCard;

/*import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const MovieCard = ({ image, name, ticketprice, title, releasedate, director, budget }) => {
  return (
    <Card
      hoverable
      style={{
        width: '100%',
        border: '1px solid #eee',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
      cover={<img alt={name} src={image} style={{ height: 300, objectFit: 'cover' }} />}
    >
      <Meta
        title={<div style={{ textAlign: 'center', fontWeight: 'bold' }}>{title}</div>}
        description={
          <div style={{ textAlign: 'center', color: '#555' }}>
            Ticket Price: ₹{ticketprice}
          </div>
        }
      />
      <div style={{ marginTop: '10px' }}>
        <p><b>Release Date:</b> {releasedate}</p>
        <p><b>Director:</b> {director}</p>
        <p><b>Budget:</b> ₹{Number(budget).toLocaleString()}</p>
      </div>
    </Card>
  );
};

export default MovieCard;
/*
/*import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "antd";

const { Meta } = Card;

const MovieCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://backend-crud-one.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Movie List</h2>
      <div style={{ padding: "20px" }}>
        <Row >
          {data.map((movie) => (
            <Col xs={24} sm={12} md={8} lg={8} key={movie._id}>
              <Card
                hoverable
                cover={
                  <img
                    alt={movie.name}
                    src={movie.image}
                    style={{ height: "250px", objectFit: "contain" }}
                  />
                }
                style={{ height: "100%" }}
              >
                <Meta
                  title={<p style={{ textAlign: "center" }}><strong>{movie.name}</strong></p>}
                  description={
                    <>
                      <p><b>Price:</b> ₹{movie.ticketprice}</p>
                      <p><b>Title:</b> {movie.title}</p>
                      <p><b>Release Date:</b> {movie.releasedate}</p>
                      <p><b>Director:</b> {movie.director}</p>
                      <p><b>Budget:</b> {movie.budget}</p>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default MovieCard;*/
