// src/Pages/kayıtOlma.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function KayitOlma() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (!validatePassword(password)) {
      setErrorMessage('Şifre en az 8 karakter olmalı ve bir büyük harf, bir küçük harf ve bir sayı içermelidir.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Şifreler eşleşmiyor.');
      return;
    }
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    navigate('/login'); 
  };

  return (
    <Container className="mt-5">
      <h2>Kayıt Ol</h2>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formName">
          <Form.Label>Ad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Adınızı girin"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>E-posta</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-posta adresinizi girin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Şifre</Form.Label>
          <Form.Control
            type="password"
            placeholder="Şifrenizi girin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formConfirmPassword" className="mt-3">
          <Form.Label>Şifreyi Onaylayın</Form.Label>
          <Form.Control
            type="password"
            placeholder="Şifrenizi tekrar girin"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Kayıt Ol
        </Button>
      </Form>
    </Container>
  );
}

export default KayitOlma;
