// SellerDashboard.js
import React from 'react';

const SellerDashboard = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-dark">Seller Dashboard</h2>
        <p className="text-muted">Welcome! Manage your products and orders here.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ backgroundColor: '#f3d19c' }}>
              <h5 className="card-title">My Products</h5>
              <p className="card-text">Add or edit your listed products</p>
              <button className="btn btn-outline-primary w-100">Manage Products</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ backgroundColor: '#d2a0e6' }}>
              <h5 className="card-title">Orders</h5>
              <p className="card-text">View and fulfill customer orders</p>
              <button className="btn btn-outline-success w-100">View Orders</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ backgroundColor: '#e6939c' }}>
              <h5 className="card-title">Earnings</h5>
              <p className="card-text">Check your total sales and payouts</p>
              <button className="btn btn-outline-dark w-100">View Earnings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
