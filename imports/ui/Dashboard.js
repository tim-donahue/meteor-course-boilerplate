import React from 'react';

import PrivateHeader from "./PrivateHeader";

const Dashboard = () => (
  <div>
    <PrivateHeader title="Dashboard"/>
    <div className="page-content">
      Dashboard page content
    </div>
  </div>

);

export default Dashboard;