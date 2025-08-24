import React from 'react';
import { FehlzeitenPage } from '../../src/components/FehlzeitenPage';
import '../../src/index.css';

// WeWeb Section wrapper for the existing React Fehlzeiten Dashboard
export default function WWFehlzeitenSection({ 
  content = {}, 
  uid, 
  children, 
  wwEditorState = {}, 
  wwFrontState = {} 
}) {
  
  // Map WeWeb editor properties to dashboard configuration
  const dashboardConfig = {
    title: content.title || 'Fehlzeiten',
    showFilters: content.showFilters !== false,
    showExportButton: content.showExportButton !== false, 
    showAddButton: content.showAddButton !== false,
    defaultDate: content.defaultDate || '2025-08-18',
    availableClasses: content.availableClasses 
      ? content.availableClasses.split(',').map(c => c.trim())
      : ['5a', '5b', '6a', '6b', '7a', '7b', '7c', '8a'],
    apiEndpoint: content.apiEndpoint || '',
    allowEdit: content.allowEdit !== false,
    allowDelete: content.allowDelete === true,
    theme: content.theme || 'default',
    compactMode: content.compactMode === true,
    resultsPerPage: content.resultsPerPage || 25,
    
    // WeWeb-specific props
    isInEditor: wwEditorState?.editMode || false,
    isSelected: wwEditorState?.isSelected || false,
    elementId: uid,
    pageId: wwFrontState?.pageId,
    language: wwFrontState?.lang || 'de'
  };

  // Apply theme-specific styles
  const getThemeClasses = () => {
    switch (content.theme) {
      case 'blue':
        return 'ww-theme-blue';
      case 'green':
        return 'ww-theme-green';
      case 'purple':
        return 'ww-theme-purple';
      default:
        return 'ww-theme-default';
    }
  };

  // Apply compact mode classes
  const getLayoutClasses = () => {
    return content.compactMode ? 'ww-compact-mode' : 'ww-normal-mode';
  };

  // Handle WeWeb events (these can be connected to WeWeb workflows)
  const handleDashboardEvent = (eventType, eventData) => {
    // Emit WeWeb custom events that can trigger workflows
    if (typeof window !== 'undefined' && window.wwLib) {
      window.wwLib.wwEvent.emit(`dashboard-${eventType}`, {
        elementId: uid,
        pageId: wwFrontState?.pageId,
        data: eventData
      });
    }
    
    // Also emit standard DOM events for broader compatibility
    if (typeof window !== 'undefined') {
      const customEvent = new CustomEvent(`ww-dashboard-${eventType}`, {
        detail: { elementId: uid, data: eventData }
      });
      window.dispatchEvent(customEvent);
    }
  };

  // Enhanced FehlzeitenPage component with WeWeb integration
  const EnhancedFehlzeitenPage = () => {
    return (
      <FehlzeitenPage 
        {...dashboardConfig}
        onAddEntry={() => handleDashboardEvent('add-entry', {})}
        onEditEntry={(entry) => handleDashboardEvent('edit-entry', entry)}
        onDeleteEntry={(entryId) => handleDashboardEvent('delete-entry', { id: entryId })}
        onExport={(format, data) => handleDashboardEvent('export', { format, data })}
        onFilterChange={(filters) => handleDashboardEvent('filter-change', filters)}
        onDataLoad={(data) => handleDashboardEvent('data-load', { count: data.length })}
      />
    );
  };

  return (
    <div 
      className={`ww-fehlzeiten-dashboard ${getThemeClasses()} ${getLayoutClasses()}`}
      data-ww-element-id={uid}
      data-ww-in-editor={wwEditorState?.editMode}
      data-ww-selected={wwEditorState?.isSelected}
    >
      {/* Editor-only overlay for selection/configuration */}
      {wwEditorState?.editMode && (
        <div className="ww-editor-overlay">
          <div className="ww-editor-label">
            {content.title || 'Fehlzeiten Dashboard'}
            {wwEditorState?.isSelected && <span className="ww-selected-indicator">●</span>}
          </div>
        </div>
      )}
      
      {/* Main Dashboard Component */}
      <EnhancedFehlzeitenPage />
      
      {/* WeWeb children (if any nested elements) */}
      {children}
    </div>
  );
}

// Component metadata for WeWeb
WWFehlzeitenSection.displayName = 'FehlzeitenDashboard';
WWFehlzeitenSection.wwElementType = 'section';
