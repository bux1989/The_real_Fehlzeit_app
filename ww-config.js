export default {
  editor: {
    label: {
      en: 'Fehlzeiten Dashboard',
      de: 'Fehlzeiten Dashboard'
    },
    icon: 'calendar-check',
    bubble: {
      icon: 'calendar-check',
    },
    infoTag: content => ({
      text: content.title || 'Fehlzeiten Dashboard',
      color: 'var(--ww-color-blue-500)',
    }),
  },

  properties: {
    title: {
      label: { 
        en: 'Dashboard Title',
        de: 'Dashboard Titel'
      },
      type: 'Text',
      defaultValue: 'Fehlzeiten',
    },
    
    showFilters: {
      label: { 
        en: 'Show Filters',
        de: 'Filter anzeigen'
      },
      type: 'OnOff',
      defaultValue: true,
    },
    
    showExportButton: {
      label: { 
        en: 'Show Export Button',
        de: 'Export Button anzeigen'
      },
      type: 'OnOff',
      defaultValue: true,
    },
    
    showAddButton: {
      label: { 
        en: 'Show Add Button',
        de: 'Hinzufügen Button anzeigen'
      },
      type: 'OnOff',
      defaultValue: true,
    },
    
    defaultDate: {
      label: { 
        en: 'Default Date',
        de: 'Standard Datum'
      },
      type: 'Text',
      defaultValue: '2025-08-18',
    },
    
    availableClasses: {
      label: { 
        en: 'Available Classes',
        de: 'Verfügbare Klassen'
      },
      type: 'Text',
      defaultValue: '5a,5b,6a,6b,7a,7b,7c,8a',
      options: {
        placeholder: 'Comma separated list: 5a,5b,6a...'
      }
    },
    
    apiEndpoint: {
      label: { 
        en: 'API Endpoint',
        de: 'API Endpunkt'
      },
      type: 'Text',
      defaultValue: '',
      options: {
        placeholder: 'https://api.example.com/absences'
      }
    },
    
    allowEdit: {
      label: { 
        en: 'Allow Edit',
        de: 'Bearbeitung erlauben'
      },
      type: 'OnOff',
      defaultValue: true,
    },
    
    allowDelete: {
      label: { 
        en: 'Allow Delete',
        de: 'Löschen erlauben'
      },
      type: 'OnOff',
      defaultValue: false,
    },
    
    theme: {
      label: { 
        en: 'Color Theme',
        de: 'Farbschema'
      },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'default', label: { en: 'Default', de: 'Standard' } },
          { value: 'blue', label: { en: 'Blue', de: 'Blau' } },
          { value: 'green', label: { en: 'Green', de: 'Grün' } },
          { value: 'purple', label: { en: 'Purple', de: 'Lila' } }
        ]
      },
      defaultValue: 'default',
    },
    
    compactMode: {
      label: { 
        en: 'Compact Mode',
        de: 'Kompakt Modus'
      },
      type: 'OnOff',
      defaultValue: false,
    },
    
    resultsPerPage: {
      label: { 
        en: 'Results Per Page',
        de: 'Ergebnisse pro Seite'
      },
      type: 'Number',
      defaultValue: 25,
      options: {
        min: 5,
        max: 100,
        step: 5
      }
    }
  },

  options: {
    autoByContent: true,
    sizable: true,
    hyperlink: false,
  },
};
