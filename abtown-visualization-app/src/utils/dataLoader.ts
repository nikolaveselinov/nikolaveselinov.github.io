import { useEffect, useState } from 'react';
import { DataType } from '../types';

export const loadData = async (): Promise<DataType[]> => {
    const response = await fetch('/static/uploads/abtown_dataset_computed.csv');
    const text = await response.text();
    
    const data: DataType[] = parseCSV(text);
    return data;
};

const parseCSV = (text: string): DataType[] => {
    const lines = text.split('\n');
    const headers = lines[0].split(',');

    return lines.slice(1).map(line => {
        const values = line.split(',');
        const entry: any = {};
        headers.forEach((header, index) => {
            entry[header.trim()] = values[index].trim();
        });
        return entry as DataType;
    });
};