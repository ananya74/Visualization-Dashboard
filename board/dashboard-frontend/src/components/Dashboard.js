import React, { useEffect, useState } from 'react';
import Filters from './Filters';
import IntensityChart from './charts/IntensityChart';
import { fetchData } from '../api';
import LikelihoodChart from './charts/LikelihoodChart';
import RelevanceChart from './charts/RelevanceChart';
import CountryChart from './charts/CountryChart';
import InsightCards from './InsightCards';
import CountryStats from './CountryStats';
import CompletedTaskCard from './CompletedTaskCard';
import SectorPieChart from './charts/SectorPieChart';


export default function Dashboard() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(filters).then((res) => setData(res.data));
  }, [filters]);

  return (
    <div className="container py-4">
      <h2 className="mb-4">📊 Data Visualization Dashboard</h2>
      <InsightCards data={data} />
      <Filters filters={filters} setFilters={setFilters} />
      <div className="my-4"></div>

      <div className="row mb-4">
        <div className="col-md-6 mb-4">
            {/* Entries by Country */}
            <CountryStats data={data} />

            {/* Add space between cards */}
            <div className="mt-3"></div>

            {/* Sector Pie Chart below */}
            <div className="card p-4 shadow-sm text-center">
                <h5 className="mb-3">🧩 Sector Distribution</h5>
                <div style={{ height: 350 }}>
                <SectorPieChart data={data} />
                </div>
            </div>
        </div>


        <div className="col-md-6 mb-4">
            <div className="card p-4 shadow-sm text-center" style={{ height: 720 }}>
                <h5 className="mb-3">💰 Earning Reports</h5>
                <div style={{ fontSize: '32px', fontWeight: 'bold' }}>$468</div>
                <div className="text-success fw-bold mt-2">+4.2%</div>
                <p className="text-muted">Compared to last week</p>
                <hr />
                <div className="d-flex justify-content-around mt-3">
                <div>
                    <div className="text-muted">Earnings</div>
                    <strong>$545.69</strong>
                </div>
                <div>
                    <div className="text-muted">Profit</div>
                    <strong>$256.34</strong>
                </div>
                <div>
                    <div className="text-muted">Expense</div>
                    <strong>$74.19</strong>
                </div>
            </div>
            <div className="mt-3" >
                <CompletedTaskCard />
            </div>
            


        </div>
    </div>

        
        
      </div>
      <div className="my-4"></div>



      <div className="row mb-4">
        <div className="col-md-6">
            <div className="card p-4 shadow-sm h-100">
            <h5>Intensity by Topic</h5>
            <IntensityChart data={data} />
            </div>
        </div>
       
        <div className="col-md-6">
            <div className="card p-4 shadow-sm h-100">
            <h5>Likelihood by Topic</h5>
            <LikelihoodChart data={data} />
            </div>
        </div>
      </div>



      <div className="row mb-4">
        <div className="col-md-6">
            <div className="card p-4 shadow-sm h-100">
            <h5>Relevance by Region</h5>
            <RelevanceChart data={data} />
            </div>
        </div>
        
        <div className="col-md-6">
            <div className="card p-4 shadow-sm h-100">
            <h5>Entries by Country</h5>
            <CountryChart data={data} />
            </div>
        </div>
      </div>

    </div>
  );
}
