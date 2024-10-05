import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Slider, Box, Paper } from '@mui/material';

import Navbar from './Navbar';
import Footer from './Footer';
import './Styles/Tailwind/Playground.css';

const Playground = () => {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [amt1, setAmt1] = useState(100); // Annual Investment Amount
  const [int1, setInt1] = useState(5);   // Annual Interest Rate

  // Function to generate a random position within the container's bounds
  const moveButton = () => {
    const newTop = Math.random() * 90 + '%'; // Random position within 90% of container height
    const newLeft = Math.random() * 90 + '%'; // Random position within 90% of container width
    setPosition({ top: newTop, left: newLeft });
  };

  // Initial data for radar chart
  const [radarData, setRadarData] = useState([
    { subject: 'Inovace', A: 80, fullMark: 100 },
    { subject: 'Spokojenost zákazníků', A: 90, fullMark: 100 },
    { subject: 'Operační efektivita', A: 75, fullMark: 100 },
    { subject: 'Zapojení zaměstnanců', A: 85, fullMark: 100 },
    { subject: 'Finanční zdraví', A: 70, fullMark: 100 },
    { subject: 'Konkurenceschopnost na trhu', A: 65, fullMark: 100 },
  ]);

  // Slider Handlers for Investment and Interest
  const handleSliderChange = (event, newValue) => {
    setAmt1(newValue);
  };

  const handleSliderChange2 = (event, newValue) => {
    setInt1(newValue);
  };

  // Handler for radar data sliders
  const handleRadarSliderChange = (index, newValue) => {
    const updatedData = radarData.map((item, i) => (i === index ? { ...item, A: newValue } : item));
    setRadarData(updatedData);
  };

  // Function to calculate compounded future value for each year
  const calculateTotalValue = (year, investment, rate) => {
    let total = 0;
    for (let i = 1; i <= year; i++) {
      total += investment * Math.pow(1 + rate / 100, year - i + 1);
    }
    return total;
  };

  // Data for the line chart
  const data = [
    { name: '2023', hodnota: 0 },
    { name: '2024', hodnota: calculateTotalValue(1, amt1, int1) },
    { name: '2025', hodnota: calculateTotalValue(2, amt1, int1) },
    { name: '2026', hodnota: calculateTotalValue(3, amt1, int1) },
    { name: '2027', hodnota: calculateTotalValue(4, amt1, int1) },
    { name: '2028', hodnota: calculateTotalValue(5, amt1, int1) },
  ];

  return (
    <div className="App">
      <Navbar />

      {/* Investment Department */}
      <Paper elevation={3} style={{ padding: '24px', margin: '50px', textAlign: 'center', marginTop: '150px', opacity: 0.7 }}>
        <h5>Investiční Simulátor</h5>

        <Box style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '30px' }}>
          {/* Line Chart */}
          <Box style={{ width: '60%' }}>
            <LineChart width={600} height={300} data={data} margin={{ top: 50, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="hodnota" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </Box>

          {/* Controls */}
          <Box style={{ width: '30%' }}>
            <h6>Parametry Investice</h6>

            {/* Investment Amount Slider */}
            <Slider
              size="small"
              value={amt1}
              onChange={handleSliderChange}
              aria-label="Investment Amount"
              valueLabelDisplay="auto"
              min={0}
              max={1000}
            />
            <p>Roční investice: {amt1} Kč</p>

            {/* Interest Rate Slider */}
            <Slider
              size="small"
              value={int1}
              onChange={handleSliderChange2}
              aria-label="Interest Rate"
              valueLabelDisplay="auto"
              min={0}
              max={15}
            />
            <p>Roční úrok: {int1} %</p>
          </Box>
        </Box>
      </Paper>

      {/* Radar Chart Section */}
      <Paper elevation={3} style={{ padding: '24px', margin: '50px', textAlign: 'center', marginTop: '50px', opacity: 0.7 }}>
        <h6>Příklad grafu</h6>

        <Box style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          {/* Sliders for radar chart values */}
          <Box style={{ width: '30%' }}>
            <h6>Nastavení Radarových Hodnot</h6>
            {radarData.map((subject, index) => (
              <Box key={index} style={{ marginBottom: '20px' }}>
                <p>{subject.subject}: {subject.A}</p>
                <Slider
                  size="small"
                  value={subject.A}
                  onChange={(event, newValue) => handleRadarSliderChange(index, newValue)}
                  aria-label={`${subject.subject} Value`}
                  valueLabelDisplay="auto"
                  min={0}
                  max={100}
                />
              </Box>
            ))}
          </Box>

          {/* Radar Chart */}
          <Box style={{ height: 400, width: '60%' }}>
            <ResponsiveContainer>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="red" fill="#ffd700" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Paper>

      <Footer />
    </div>
  );
};

export default Playground;
