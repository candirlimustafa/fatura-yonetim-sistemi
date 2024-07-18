import React, { createContext, useState } from 'react';

export const FaturaContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([]);

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  return (
    <FaturaContext.Provider value={{ invoices, addInvoice }}>
      {children}
    </FaturaContext.Provider>
  );
};
