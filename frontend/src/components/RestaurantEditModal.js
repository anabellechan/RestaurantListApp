import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RestaurantEditModal = ({ show, handleClose, restaurant, handleSave }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (restaurant) {
      setName(restaurant.name || '');
      setLocation(restaurant.location || '');
      setRating(restaurant.rating || '');
      setCuisine(restaurant.cuisine|| '');
      setDescription(restaurant.description|| '');
    }
  }, [restaurant]);

  const onSave = () => {
    console.log(restaurant)
    handleSave({ ...restaurant, name, location, rating, description, cuisine });
    handleClose();
  };
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Restaurant</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formRestaurantName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter restaurant name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formRestaurantLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formRestaurantDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formRestaurantRating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </Form.Group>

          <Form.Label>Cuisine</Form.Label>
          <Form.Select
              value={cuisine}
              onChange={(e) => [console.log("Clicked",e.target.value), setCuisine(e.target.value)]}
              className="mb-2 force-dropdown-down"
            >
              <option value="">Select Cuisine</option>
              <option value="Italian">Italian</option>
              <option value="Chinese">Chinese</option>
              <option value="Muslim">Muslim</option>
              <option value="Indian">Indian</option>
              <option value="Korean">Korean</option>
              <option value="Japanese">Japanese</option>
            </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="secondary" className="btn-orange" onClick={onSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RestaurantEditModal;