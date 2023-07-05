import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <section className="section-center dashboard-center">
      <h2 className="dashboard-title">
        welcome to our <span>little lemon restaurant</span>
      </h2>
      <h4
        style={{
          textTransform: 'capitalize',
          textAlign: 'center',
          marginTop: '2rem',
          fontSize: '2rem',
        }}
      >
        hello,{' '}
        <span style={{ fontSize: '2.5rem', color: '#ee9972' }}> {user}</span>{' '}
        our dear customer
      </h4>
    </section>
  );
};

export default Dashboard;
