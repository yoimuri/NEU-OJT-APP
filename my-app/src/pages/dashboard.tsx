import React from 'react';
import Header from "../components/Header";
import MainOptions from "../components/MainOptions";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  return ( 
      <div className = "app-container">
        <Header />
        <MainOptions />
      </div>
  );
}

export default Dashboard;
