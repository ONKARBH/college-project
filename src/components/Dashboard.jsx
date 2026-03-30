import React, { useState } from 'react';
 
const Dashboard = ({ components, onEditLayout, onUpdateComponents }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [layoutPresets, setLayoutPresets] = useState([
    { id: 'default', name: 'Default Layout', components: components },
    { id: 'focus', name: 'Focus on Placements', components: components.map(c => 
      ({ ...c, enabled: c.id.includes('placement') || c.id === 'recruiters' || c.id === 'highlights' })
    )},
    { id: 'academic', name: 'Academic Focus', components: components.map(c => 
      ({ ...c, enabled: !c.id.includes('placement') && c.id !== 'recruiters' })
    )}
  ]);

  const applyPreset = (presetId) => {
    const preset = layoutPresets.find(p => p.id === presetId);
    if (preset) {
      onUpdateComponents(preset.components);
    }
  };

  const saveCurrentAsPreset = () => {
    const presetName = prompt('Enter preset name:');
    if (presetName) {
      const newPreset = {
        id: Date.now().toString(),
        name: presetName,
        components: components
      };
      setLayoutPresets([...layoutPresets, newPreset]);
    }
  };

  const stats = {
    totalComponents: components.length,
    enabledComponents: components.filter(c => c.enabled).length,
    leftColumn: components.filter(c => c.enabled && c.column === 'left').length,
    rightColumn: components.filter(c => c.enabled && c.column === 'right').length,
    fullWidth: components.filter(c => c.enabled && c.column === 'full').length,
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h2>📊 Website Layout Dashboard</h2>
        <p>Manage and customize your website layout</p>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-sidebar">
          <div className="sidebar-nav">
            <button 
              className={`nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              📈 Overview
            </button>
            <button 
              className={`nav-btn ${activeTab === 'components' ? 'active' : ''}`}
              onClick={() => setActiveTab('components')}
            >
              🧩 Components
            </button>
            <button 
              className={`nav-btn ${activeTab === 'presets' ? 'active' : ''}`}
              onClick={() => setActiveTab('presets')}
            >
              💾 Presets
            </button>
            <button 
              className={`nav-btn ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              📊 Analytics
            </button>
          </div>

          <div className="sidebar-actions">
            <button className="action-btn primary" onClick={onEditLayout}>
              ✏️ Edit Layout
            </button>
            <button className="action-btn secondary" onClick={saveCurrentAsPreset}>
              💾 Save as Preset
            </button>
            <button className="action-btn" onClick={() => window.print()}>
              🖨️ Export Layout
            </button>
          </div>
        </div>

        <div className="dashboard-main">
          {activeTab === 'overview' && (
            <div className="overview-tab">
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>{stats.totalComponents}</h3>
                  <p>Total Sections</p>
                </div>
                <div className="stat-card">
                  <h3>{stats.enabledComponents}</h3>
                  <p>Active Sections</p>
                </div>
                <div className="stat-card">
                  <h3>{stats.leftColumn}</h3>
                  <p>Left Column</p>
                </div>
                <div className="stat-card">
                  <h3>{stats.rightColumn}</h3>
                  <p>Right Column</p>
                </div>
              </div>

              <div className="layout-visualization">
                <h4>Current Layout</h4>
                <div className="visualization">
                  <div className="vis-full">
                    <span>Full Width: {stats.fullWidth} sections</span>
                  </div>
                  <div className="vis-columns">
                    <div className="vis-left">
                      <span>Left: {stats.leftColumn} sections</span>
                    </div>
                    <div className="vis-right">
                      <span>Right: {stats.rightColumn} sections</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'components' && (
            <div className="components-tab">
              <div className="components-list">
                {components.map((component) => (
                  <div key={component.id} className="component-card">
                    <div className="component-header">
                      <h4>{component.title}</h4>
                      <div className="component-status">
                        <span className={`status ${component.enabled ? 'active' : 'inactive'}`}>
                          {component.enabled ? '✅ Active' : '❌ Hidden'}
                        </span>
                      </div>
                    </div>
                    <div className="component-body">
                      <div className="component-meta">
                        <span className="meta-item">Column: {component.column}</span>
                        <span className="meta-item">ID: {component.id}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'presets' && (
            <div className="presets-tab">
              <div className="presets-list">
                {layoutPresets.map((preset) => (
                  <div key={preset.id} className="preset-card">
                    <h4>{preset.name}</h4>
                    <p>{preset.components.filter(c => c.enabled).length} active sections</p>
                    <button 
                      className="btn-apply"
                      onClick={() => applyPreset(preset.id)}
                    >
                      Apply Preset
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;