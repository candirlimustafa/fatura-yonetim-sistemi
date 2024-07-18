import React from 'react';
import { Link } from 'react-router-dom';

function AnaSayfa2() {
  return (
    <div className="container mt-5">
      <h2>FATURA YÖNETİM SİSTEMİNE HOŞGELDİNİZ</h2>
      <p>
        <Link to="/create" className="btn btn-primary">YENİ FATURA</Link>
      </p>
      <p>
        <Link to="/invoices" className="btn btn-secondary">FATURA SAYFASI</Link>
      </p>
    </div>
  );
}

export default AnaSayfa2;
