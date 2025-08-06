import React from 'react';

function App() {
  const heading = <h1>Office Space Rental App</h1>;

  const imageURL = "https://www.sohopodomorocity.com/wp-content/uploads/2016/09/4.jpg";

  const office = {
    name: "Skyview Towers",
    rent: 55000,
    address: "123 Business Street, Tech City"
  };

  const officeList = [
    {
      name: "Tech Hub",
      rent: 45000,
      address: "Plot 1, IT Park, Hyderabad"
    },
    {
      name: "Skyview Towers",
      rent: 70000,
      address: "123 Business Street, Tech City"
    },
    {
      name: "Innovate Workspace",
      rent: 60000,
      address: "456 Startup Lane, Bangalore"
    },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {heading}

      <img
  src={imageURL}
  alt="Office"
  style={{
    width: '400px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px'
  }}
/>

      <div>
        <h2>Featured Office</h2>
        <p><strong>Name:</strong> {office.name}</p>
        <p>
          <strong>Rent:</strong>{' '}
          <span style={{ color: office.rent > 60000 ? 'green' : 'red' }}>
            ₹{office.rent}
          </span>
        </p>
        <p><strong>Address:</strong> {office.address}</p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Other Available Offices</h2>
        {officeList.map((o, index) => (
          <div key={index} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc' }}>
            <p><strong>Name:</strong> {o.name}</p>
            <p>
              <strong>Rent:</strong>{' '}
              <span style={{ color: o.rent > 60000 ? 'green' : 'red' }}>
                ₹{o.rent}
              </span>
            </p>
            <p><strong>Address:</strong> {o.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

