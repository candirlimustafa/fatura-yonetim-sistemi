import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaturaContext } from '../Context/faturaContext';

function FaturaDetay() {
  const { id } = useParams();
  const { invoices } = useContext(FaturaContext);
  const invoice = invoices[id];

  if (!invoice) {
    return <div>Fatura Bulunamadı</div>;
  }

  if (!Array.isArray(invoice.items)) {
    return <div>Fatura öğeleri geçersiz.</div>;
  }

  return (
    <div>
      <h2>Fatura Detay</h2>
      <p><strong>Müşteri:</strong> {invoice.customer}</p>
      <h3>Hareketler</h3>
      <ul>
        {invoice.items.map((item, index) => {
         
          const price = Number(item.price); 

          return (
            <li key={index}>
              {item.description} - {item.quantity} x TL{price.toFixed(2)}
            </li>
          );
        })}
      </ul>
      <p><strong>Toplam:</strong> TL{invoice.items.reduce((total, item) => {
        const price = Number(item.price); 
        return total + (item.quantity * price);
      }, 0).toFixed(2)}</p>
    </div>
  );
}

export default FaturaDetay;
