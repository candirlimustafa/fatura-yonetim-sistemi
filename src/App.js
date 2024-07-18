// src/App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext'; // AuthContext'i içe aktar
import { InvoiceProvider } from './Context/faturaContext';

// Lazy load bileşenleri
const Giris = React.lazy(() => import('./Pages/girisYap'));
const Kayıt = React.lazy(() => import('./Pages/kayıtOlma'));
const FaturaOlustur = React.lazy(() => import('./Pages/faturaOlustur'));
const FaturaList = React.lazy(() => import('./Components/faturaList'));
const FaturaGoruntule = React.lazy(() => import('./Pages/faturaGoruntule'));
const AnaSayfa2 = React.lazy(() => import('./Pages/anaSayfa2'));
const AppBar = React.lazy(() => import('./Components/AppBar'));

function App() {
  return (
    <Router>
      <AuthProvider> {/* AuthProvider'ı burada ekleyin */}
        <InvoiceProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <AppBar /> {/* AppBar'ı burada ekleyin */}
            <div className="container">
              <Routes>
                <Route path="/" element={<Giris />} />
                <Route path="/anasayfa" element={<AnaSayfa2 />} />
                <Route path="/login" element={<Giris />} />
                <Route path="/register" element={<Kayıt />} />
                <Route path="/create" element={<FaturaOlustur />} />
                <Route path="/invoices" element={<FaturaList />} />
                <Route path="/view/:id" element={<FaturaGoruntule />} />
              </Routes>
            </div>
          </Suspense>
        </InvoiceProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
