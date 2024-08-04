import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row, Col, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import './navbar.css';

const navItemStyle = {
  fontSize: '25px',
  fontWeight: 'bold',
};

const MyNavbar = ({ restaurants, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const fuse = new Fuse(restaurants, {
    keys: ['name', 'location', 'rating'],
    includeScore: true,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const results = fuse.search(searchTerm);
    setSearchResults(results.map(result => result.item));
    setShowDropdown(true);
    onSearchResults(results.map(result => result.item));
  };

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      const results = fuse.search(term);
      setSearchResults(results.map(result => result.item));
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleSelect = (restaurant) => {
    setSearchTerm(restaurant.name);
    setShowDropdown(false);
    navigate(`/restaurants/${restaurant.id}`);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" style={{ fontSize: '50px', display: 'flex', alignItems: 'center' }}>
        <img
          src={`${process.env.PUBLIC_URL}/logo-burpple.png`}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="Burpple logo"
        />
        <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>Food List</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" style={navItemStyle}>Home</Nav.Link>
          <Nav.Link href="/about" style={navItemStyle}>About Us</Nav.Link>
        </Nav>
        <Form inline onSubmit={handleSearch} className="position-relative">
          <Row>
            <Col>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 nav-search-bar"
                value={searchTerm}
                onChange={handleChange}
                onFocus={() => setShowDropdown(true)}
              />
              {showDropdown && searchResults.length > 0 && (
                <Dropdown.Menu show className="w-100 position-absolute">
                  {searchResults.map((restaurant) => (
                    <Dropdown.Item
                      key={restaurant.id}
                      onClick={() => handleSelect(restaurant)}
                    >
                      {restaurant.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              )}
            </Col>
          </Row>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;