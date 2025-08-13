import React, { useState } from 'react';

const ParameterSelector: React.FC<{ onParametersChange: (k: number, a: number, b: number) => void }> = ({ onParametersChange }) => {
    const [k, setK] = useState(1);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const handleKChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setK(value);
        onParametersChange(value, a, b);
    };

    const handleAChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setA(value);
        onParametersChange(k, value, b);
    };

    const handleBChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setB(value);
        onParametersChange(k, a, value);
    };

    return (
        <div>
            <h2>Select Parameters</h2>
            <div>
                <label>
                    k:
                    <input type="number" value={k} onChange={handleKChange} min="1" />
                </label>
            </div>
            <div>
                <label>
                    a:
                    <input type="number" value={a} onChange={handleAChange} />
                </label>
            </div>
            <div>
                <label>
                    b:
                    <input type="number" value={b} onChange={handleBChange} />
                </label>
            </div>
        </div>
    );
};

export default ParameterSelector;