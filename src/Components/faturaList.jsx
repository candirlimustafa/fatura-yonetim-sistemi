import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaturaContext } from '../Context/faturaContext';

function FaturaList() {
  const { invoices } = useContext(FaturaContext);
  const [searchCustomer, setSearchCustomer] = useState('');
  const [searchDate, setSearchDate] = useState('');

 
  const formatDate = (date) => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) return ''; 
    return parsedDate.toISOString().split('T')[0];
  };

  // Faturaları filtreleme işlevi
  const filteredInvoices = invoices.filter((invoice) => {
    const invoiceDate = formatDate(invoice.date); // invoice.date uygun bir tarih formatında olmalı
    const isCustomerMatch = invoice.customer.toLowerCase().includes(searchCustomer.toLowerCase());
    const isDateMatch = searchDate ? invoiceDate === searchDate : true;

    return isCustomerMatch && isDateMatch;
  });

  return (
    <div>
      <h2>Faturalar</h2>

      
      <form>
        <div className="mb-3">
          <label htmlFor="searchCustomer" className="form-label">Müşteri Adı</label>
          <input
            type="text"
            id="searchCustomer"
            className="form-control"
            value={searchCustomer}
            onChange={(e) => setSearchCustomer(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="searchDate" className="form-label">Tarih</label>
          <input
            type="date"
            id="searchDate"
            className="form-control"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </div>
      </form>

    
      <table className="table">
        <thead>
          <tr>
            <th>Fatura ID</th>
            <th>Müşteri</th>
            <th>Tarih</th>
            <th>Hareketler</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.map((invoice, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{invoice.customer}</td>
              <td>{formatDate(invoice.date)}</td>
              <td>
                <Link to={`/view/${index}`} className="btn btn-primary">Detay</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FaturaList;
