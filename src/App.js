import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Overview from './Overview/Overview';
import MyInfo from './MyInfo/MyInfo';
import Pay from './Pay/Pay';
import Timesheet from './Pay/Timesheet/Timesheet';
import W2 from './Pay/W2/W2';
import Other from './Pay/Other/Other';
import Learning from './Learning/Learning';
import TaskList from './TaskList/TaskList';
import Feedback from './Feedback/Feedback';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/my-info" element={<MyInfo />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/pay/timesheet" element={<Timesheet />} />
          <Route path="/pay/w2" element={<W2 />} />
          <Route path="/pay/other" element={<Other />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/tasklist" element={<TaskList />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </div>
  );
}

export default App; 