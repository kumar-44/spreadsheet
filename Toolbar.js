import React from 'react';
import './Toolbar.css';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="left-actions">
        <button>Hide fields</button>
        <button>Sort</button>
        <button>Filter</button>
      </div>
      <div className="right-actions">
        <button className="import-btn">Import</button>
        <button>Export</button>
        <button>Share</button>
      </div>
    </div>
  );
};

export default Toolbar;
