import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import '../CSS/GirisYap.css'; 

function GirisYap() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
      login(); 
      navigate('/anasayfa');
    } else {
      alert('E-posta veya şifre hatalı.');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Giriş Yap</h2>
      <div className="card-container">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <Card style={{ width: '100%', height: '100%' }}>
                <Card.Body className="d-flex justify-content-center align-items-center text-center">
                  <Card.Title className="text-primary">Fatura Yönetim Sistemi</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="card-back">
              <Card style={{ width: '100%', height: '100%', backgroundColor: '#343a40', color: 'white' }}>
                <Card.Body>
                  <Card.Title>Uygulama Bilgisi</Card.Title>
                  <Card.Text>
                    Fatura Yönetim Sistemi'ne hoş geldiniz! Bu uygulama, faturaları
                    oluşturmanıza, görüntülemenize ve yönetmenize olanak tanır. Giriş yaparak
                    sistemdeki işlemlerinizi gerçekleştirebilirsiniz. Eğer hesabınız yoksa,
                    kayıt olmanız gerekiyor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formEmail">
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
        <Button variant="primary" type="submit" className="mt-3 btn-soft-blue">
          Giriş Yap
        </Button>
      </Form>
      <p className="mt-3">
        Hesabınız yok mu? <Link to="/register">Kayıt Olun</Link>
      </p>
    </Container>
  );
}

export default GirisYap;
