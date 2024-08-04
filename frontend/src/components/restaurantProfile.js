import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './Navbar';


const RestaurantProfile = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const navigate = useNavigate();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurantById(id);
    fetchRestaurants();
  }, [id]);

  const handleSearchResults = (results) => {
    console.log(results);
    setFilteredRestaurants(results);
  };

  const fetchRestaurants = async () => {
    const response = await axios.get('http://localhost:8080/api/restaurants');
    setRestaurants(response.data);
  };

  async function fetchRestaurantById(id) {
    try {
      console.log("Response:",id)
      const response = await axios.get(`http://localhost:8080/api/restaurants/${id}`);
      setRestaurant(response.data)
      console.log(response.data)
    } catch (error) {
      console.error("Failed to fetch restaurant:", error);
      throw error; // Rethrow the error to handle it further up the call stack
    }
  }

  if (!restaurant) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <MyNavbar restaurants={restaurants} onSearchResults={handleSearchResults} />      
      <Container className="d-flex justify-content-center align-items-center p-5" style={{ minHeight: '100vh'}}>
      <Row>
        <Col>
         <Card style={{ width: '50rem' }}>
         <Card.Img variant="top" src={restaurant.image} style={{ maxHeight: '500px', objectFit: 'cover' }} />      <Card.Body>
        <Card.Title><h1>{restaurant.name}</h1><br/></Card.Title>
        <Card.Text>
        <h2>Location: {restaurant.location}</h2><br/>
        <h2>Rating: {restaurant.rating}</h2><br/>
        <h2>Cuisine: {restaurant.cuisine}</h2><br/>
        <h2>Description: </h2> {restaurant.description}
        <br/><br/>
        <h2>Upload Date: {new Date(restaurant.upload_date).toLocaleDateString()}</h2>
        </Card.Text>
        <Card.Text>
        </Card.Text>
        <br></br>
        <Button  className="btn-pink" onClick={() => navigate('/')}> Go Back   
            </Button>
        </Card.Body>
    </Card>
    </Col>
      </Row>
    </Container>
    </div>
  );
};

export default RestaurantProfile;