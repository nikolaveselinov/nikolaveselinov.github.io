import React, { useState, useEffect } from 'react';
import DatasetVisualizer from '../components/DatasetVisualizer';
import ParameterSelector from '../components/ParameterSelector';
import { loadData } from '../utils/dataLoader';

const IndexPage = () => {
  const [data, setData] = useState(null);
  const [k, setK] = useState(1);
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const dataset = await loadData();
      setData(dataset);
    };
    fetchData();
  }, []);

  const handleKChange = (newK) => {
    setK(newK);
  };

  const handleAChange = (newA) => {
    setA(newA);
  };

  const handleBChange = (newB) => {
    setB(newB);
  };

  return (
    <div>
      <h1>AB Town Dataset Visualization</h1>
      <ParameterSelector 
        k={k} 
        a={a} 
        b={b} 
        onKChange={handleKChange} 
        onAChange={handleAChange} 
        onBChange={handleBChange} 
      />
      {data && (
        <DatasetVisualizer 
          data={data} 
          k={k} 
          a={a} 
          b={b} 
        />
      )}
      <a href="/static/uploads/abtown_dataset_computed.csv" download>
        Download Dataset
      </a>
    </div>
  );
};

export default IndexPage;