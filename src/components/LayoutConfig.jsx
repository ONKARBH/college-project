import React from 'react';
import '../styles/layout.scss';

const LayoutConfig = ({ components, onToggle, onChangeColumn, onSaveLayout, onCancel }) => {
  return (
    <div className="layout-config-modal">
      <div className="config-overlay" onClick={onCancel}></div>
      <div className="config-panel">
        <div className="config-header">
          <h3>⚙️ Layout Configuration</h3>
          <p>Customize your homepage layout</p>
        </div>

        <div className="config-content">
          <div className="section-list">
            <h4>Available Sections</h4>
            <div className="sections-grid">
              {components.map((component) => (
                <div key={component.id} className={`section-item ${component.enabled ? 'enabled' : 'disabled'}`}>
                  <div className="section-info">
                    <div className="section-title">{component.title}</div>
                    <div className="section-status">
                      <span className="status-dot"></span>
                      {component.enabled ? 'Visible' : 'Hidden'}
                    </div>
                  </div>
                  
                  <div className="section-controls">
                    <select 
                      value={component.column}
                      onChange={(e) => onChangeColumn(component.id, e.target.value)}
                      className="column-select"
                    >
                      <option value="left">Left Column</option>
                      <option value="right">Right Column</option>
                      <option value="full">Full Width</option>
                    </select>
                    
                    <button 
                      onClick={() => onToggle(component.id)}
                      className={`toggle-btn ${component.enabled ? 'active' : ''}`}
                    >
                      {component.enabled ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="layout-preview">
            <h4>Layout Preview</h4>
            <div className="preview-container">
              <div className="preview-full">
                <div className="preview-label">Full Width Sections</div>
                {components.filter(c => c.enabled && c.column === 'full').map(c => (
                  <div key={c.id} className="preview-item">{c.title}</div>
                ))}
              </div>
              
              <div className="preview-columns">
                <div className="preview-left">
                  <div className="preview-label">Left Column</div>
                  {components.filter(c => c.enabled && c.column === 'left').map(c => (
                    <div key={c.id} className="preview-item">{c.title}</div>
                  ))}
                </div>
                
                <div className="preview-right">
                  <div className="preview-label">Right Column</div>
                  {components.filter(c => c.enabled && c.column === 'right').map(c => (
                    <div key={c.id} className="preview-item">{c.title}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="config-actions">
          <button className="btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-save" onClick={onSaveLayout}>Save Layout</button>
        </div>
      </div>
    </div>
  );
};

export default LayoutConfig;