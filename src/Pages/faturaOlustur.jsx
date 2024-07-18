import React, { useContext } from 'react';
import { FaturaContext } from '../Context/faturaContext';
import FaturaForm from '../Components/faturaForm';

function FaturaOlustur() {
  const { addInvoice } = useContext(FaturaContext);

  const handleInvoiceSubmit = (invoice) => {
    addInvoice(invoice);
    alert('Invoice created successfully!');
  };

  return (
    <div>
      <h2>Fatura Oluştur</h2>
      <FaturaForm onSubmit={handleInvoiceSubmit} />
    </div>
  );
}

export default FaturaOlustur;
