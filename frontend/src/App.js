import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Table, Form, FormControl, Row, Col, Alert, Modal, Pagination } from 'react-bootstrap';
import MyNavbar from './components/Navbar';
import RestaurantEditModal from './components/RestaurantEditModal';
import './styles.css';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [newRestaurant, setNewRestaurant] = useState(null);
  const [editing, setEditing] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');
  const [activeRowId, setActiveRowId] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const response = await axios.get('http://localhost:8080/api/restaurants');
    setRestaurants(response.data);
    setFilteredRestaurants(response.data);
  };

  const handleSearchResults = (results) => {
    setFilteredRestaurants(results);
  };

  const addRestaurant = () => {
    setNewRestaurant({ name: '', location: '', rating: '', upload_date: new Date().toISOString().split('T')[0], cuisine: '' });
  };

  const saveNewRestaurant = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/restaurants', newRestaurant);
      setRestaurants([...restaurants, response.data]);
      setFilteredRestaurants([...restaurants, response.data]);
      setNewRestaurant(null);
      // Display success alert
    } catch (error) {
      console.error("Failed to add new restaurant:", error.message);
      // Display error alert
    }
  };

  const updateRestaurant = async (updatedRestaurant) => {
    updatedRestaurant.upload_date = new Date().toISOString().split('T')[0];
    const response = await axios.put(`http://localhost:8080/api/restaurants/${updatedRestaurant.id}`, updatedRestaurant);
    setRestaurants(restaurants.map(restaurant => (restaurant.id === updatedRestaurant.id ? response.data : restaurant)));
    setFilteredRestaurants(restaurants.map(restaurant => (restaurant.id === updatedRestaurant.id ? response.data : restaurant)));
    setEditing(false);
  };

  const deleteRestaurant = async (id) => {
    await axios.delete(`http://localhost:8080/api/restaurants/${id}`);
    setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
    setFilteredRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
  };

  const startEditing = (restaurant) => {
    setEditing(true);
    setCurrentRestaurant(restaurant);
    setShowModal(true);
  };

  const handleSave = (updatedRestaurant) => {
    updateRestaurant(updatedRestaurant);
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const sortByName = () => {
    let sortedItems;
    if (sortOrder === 'asc') {
      sortedItems = [...restaurants].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sortedItems = [...restaurants].sort((a, b) => b.name.localeCompare(a.name));
    }
    setRestaurants(sortedItems);
    setFilteredRestaurants(sortedItems);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortByDate = () => {
    let sortedItems;
    if (sortOrder === 'asc') {
      sortedItems = [...restaurants].sort((a, b) => new Date(a.upload_date) - new Date(b.upload_date));
    } else {
      sortedItems = [...restaurants].sort((a, b) => new Date(b.upload_date) - new Date(a.upload_date));
    }
    setRestaurants(sortedItems);
    setFilteredRestaurants(sortedItems);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
  const currentItems = filteredRestaurants.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <MyNavbar restaurants={restaurants} onSearchResults={handleSearchResults} />
      <Container className="mt-5">
        <img 
          src="/restaurant-list-burger.png" 
          alt="Restaurant Burger" 
          className="stretched-img mb-4"
        />
        <Table striped bordered hover className="mt-4 custom-table">
          <thead>
            <tr>
              <th className="table-name-width" style={{ cursor: 'pointer', color: '#9932CC' }} onClick={sortByName}>↨ Name</th>
              <th className="table-name-width">Location</th>
              <th className="table-width">Rating</th>
              <th className="table-width" style={{ cursor: 'pointer', color: '#9932CC' }} onClick={sortByDate}>↨ Upload Date</th>
              <th className="table-width">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(restaurant => (
              <tr key={restaurant.id}>
                <td>
                  <Link to={`/restaurants/${restaurant.id}`} style={{ color: '#9932CC', fontWeight: 'bold' }}>{restaurant.name}</Link>
                </td>
                <td>{restaurant.location}</td>
                <td>{restaurant.rating}</td>
                <td>{new Date(restaurant.upload_date).toISOString().substring(0, 10)}</td>
                <td>
                  <>
                    <Button
                      variant="outline-secondary"
                      className="mr-3 btn-grey"
                      onClick={() => setActiveRowId(activeRowId === restaurant.id ? null : restaurant.id)}
                    >
                      <span className="material-icons-outlined">...</span>
                    </Button>
                    {activeRowId === restaurant.id && (
                      <div className="dropdown-menu show">
                        <Button
                          variant="info"
                          className="mr-3 btn-darkpink"
                          onClick={() => {
                            startEditing(restaurant);
                            setActiveRowId(null);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          className="mr-3 btn-orange"
                          variant="secondary"
                          onClick={() => {
                            deleteRestaurant(restaurant.id);
                            setActiveRowId(null);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </>
                </td>
              </tr>
            ))}
            {newRestaurant && (
              <tr>
                <td colSpan="5">
                  <Form onSubmit={saveNewRestaurant}>
                    <Row className="d-flex justify-content-start">
                      <Col md={3}>
                        <FormControl
                          type="text"
                          placeholder="Enter restaurant name"
                          value={newRestaurant.name}
                          onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
                          className="mb-2"
                        />
                      </Col>
                      <Col md={3}>
                        <FormControl
                          type="text"
                          placeholder="Enter location"
                          value={newRestaurant.location}
                          onChange={(e) => setNewRestaurant({ ...newRestaurant, location: e.target.value })}
                          className="mb-2"
                        />
                      </Col>
                      <Col md={3}>
                        <FormControl
                          type="number"
                          placeholder="Enter rating"
                          value={newRestaurant.rating}
                          onChange={(e) => setNewRestaurant({ ...newRestaurant, rating: e.target.value })}
                          className="mb-2"
                        />
                      </Col>
                      <Col md={3}>
                        <Form.Select
                          value={newRestaurant.cuisine}
                          onChange={(e) => setNewRestaurant({ ...newRestaurant, cuisine: e.target.value })}
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
                      </Col>
                    </Row>
                    <Row className="d-flex justify-content-start">
                      <Col className="d-flex">
                        <Button variant="success" type="submit" className="mr-2">Save</Button>
                        <Button variant="secondary" onClick={() => setNewRestaurant(null)}>Cancel</Button>
                      </Col>
                    </Row>
                  </Form>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <Row className="mb-4">
          <Col>
            <Button
              className="mb-3 btn-pink"
              onClick={addRestaurant}
              size="lg"
            >
              Add Restaurant
            </Button>
          </Col>
          <Col className="d-flex justify-content-end">
            <Pagination>
              <Pagination.First onClick={() => paginate(1)} />
              <Pagination.Prev
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              />
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
              />
              <Pagination.Last onClick={() => paginate(totalPages)} />
            </Pagination>
          </Col>
        </Row>
      </Container>
      <RestaurantEditModal
        show={showModal}
        handleClose={handleClose}
        restaurant={currentRestaurant}
        handleSave={handleSave}
      />
    </div>
  );
};

export default App;