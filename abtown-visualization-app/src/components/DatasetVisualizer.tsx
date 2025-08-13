import React, { useEffect, useState } from 'react';
import { loadData } from '../utils/dataLoader';

const DatasetVisualizer = () => {
  const [data, setData] = useState([]);
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

  const filteredData = data.filter(item => item.k === k && item.a >= a && item.b <= b);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/static/uploads/abtown_dataset_computed.csv';
    link.download = 'abtown_dataset_computed.csv';
    link.click();
  };

  return (
    <div>
      <h1>Dataset Visualization</h1>
      <div>
        <h2>Selected Parameters</h2>
        <p>k: {k}</p>
        <p>a: {a}</p>
        <p>b: {b}</p>
      </div>
      <button onClick={handleDownload}>Download Dataset</button>
      <div>
        <h2>Visualization</h2>
        {/* Visualization logic goes here, e.g., using a chart library */}
        {/* Example: <Chart data={filteredData} /> */}
      </div>
    </div>
  );
};

export default DatasetVisualizer;