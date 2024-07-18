// src/Components/AppBar.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import '../CSS/AppBar.css'; 

function AppBar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    isAuthenticated && (
      <Navbar bg="info" variant="dark" expand="lg" sticky="top" className="mb-4 appbar">
        <Navbar.Brand as={Link} to="/anasayfa" className="fw-bold">Fatura Yönetim Sistemi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/anasayfa">Ana Sayfa</Nav.Link>
            <Nav.Link as={Link} to="/create">Fatura Oluştur</Nav.Link>
            <Nav.Link as={Link} to="/invoices">Faturalar</Nav.Link>
            <Nav.Link as={Link} to="/login" onClick={logout}>Çıkış Yap</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  );
}

export default AppBar;
