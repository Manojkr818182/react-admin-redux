import React from 'react';
import DashboardCard from '../../components/reusable/DashboardCard';
import MyChart from '../../components/reusable/MyChart';

const Dashboard = () => {
  return (
    <div>
      <div className='d-flex justify-content-center mt-5'>
        <DashboardCard />
      </div>
      <div className="d-flex justify-content-center pt-5 mt-5">
        <div style={{ width: "60%" }} >
          <MyChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard