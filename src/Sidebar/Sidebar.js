import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [payOpen, setPayOpen] = useState(true);
  const [learningOpen, setLearningOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-header">Access Employee Portal</div>
      <nav>
        <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Overview</NavLink>
        
        <div className="sidebar-section">
          <div className="sidebar-section-header" onClick={() => setPayOpen(!payOpen)}>
            Pay <span className="arrow">{payOpen ? '\u25B2' : '\u25BC'}</span>
          </div>
          {payOpen && (
            <div className="sidebar-subtabs">
              <NavLink to="/pay/timesheet" className={({isActive}) => isActive ? 'active' : ''}>Timesheet</NavLink>
              <NavLink to="/pay/w2" className={({isActive}) => isActive ? 'active' : ''}>W-2</NavLink>
              <NavLink to="/pay/other" className={({isActive}) => isActive ? 'active' : ''}>Other</NavLink>
            </div>
          )}
        </div>
        <div className="sidebar-section">
          <div className="sidebar-section-header" onClick={() => setLearningOpen(!learningOpen)}>
            Learning <span className="arrow">{learningOpen ? '\u25B2' : '\u25BC'}</span>
          </div>
          {learningOpen && (
            <div className="sidebar-subtabs">
              {/* Add learning subtabs here if needed */}
            </div>
          )}
        </div>
        <NavLink to="/tasklist" className={({isActive}) => isActive ? 'active' : ''}>TaskList</NavLink>
        <NavLink to="/feedback" className={({isActive}) => isActive ? 'active' : ''}>Feedback</NavLink>
      </nav>
      <NavLink to="/my-info" className={({isActive}) => 'sidebar-user user-link' + (isActive ? ' active' : '')}>
        <span>Thiwagar</span>
        <span className="user-icon">👤</span>
      </NavLink>
    </div>
  );
}

export default Sidebar; 