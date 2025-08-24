# Fehlzeiten Dashboard - WeWeb React Component

A professional student attendance tracking dashboard component for WeWeb that wraps your existing React application. This component preserves all the functionality of your original React app while making it configurable through WeWeb's visual editor.

## 🎯 Features

- **Complete React Integration**: Uses your existing React components without conversion
- **WeWeb Editor Integration**: Configure dashboard properties through WeWeb's visual interface
- **Event System**: Emit events for add, edit, delete, and export actions
- **Theme Support**: Multiple color themes (default, blue, green, purple)
- **Responsive Design**: Adapts to different screen sizes and containers
- **Compact Mode**: Space-saving layout option
- **API Ready**: Configure external data sources
- **Multilingual**: German/English label support

## 📁 Project Structure

```
weweb-attendance-dashboard/
├── ww-config.js          # WeWeb configuration and properties
├── package.json          # Dependencies and build scripts
├── rollup.config.js      # Build configuration
├── src/
│   ├── index.js          # Entry point
│   ├── wwSection.jsx     # Main WeWeb wrapper component
│   └── weweb-styles.css  # WeWeb-specific styling
├── dist/                 # Built files (generated)
└── README.md
```

## 🚀 Installation

### Prerequisites
- WeWeb account with custom component support
- Node.js 16+ and npm/yarn

### Setup

1. **Clone/Copy this component folder** to your WeWeb custom components directory

2. **Install dependencies**:
   ```bash
   cd weweb-attendance-dashboard
   npm install
   ```

3. **Build the component**:
   ```bash
   npm run build
   ```

4. **Upload to WeWeb** according to WeWeb's custom component deployment process

## ⚙️ Configuration

### Available Properties

Configure these properties through WeWeb's visual editor:

#### **Basic Settings**
- **Dashboard Title** (`title`): Main heading text
- **Show Filters** (`showFilters`): Toggle filter section visibility
- **Show Export Button** (`showExportButton`): Toggle export functionality
- **Show Add Button** (`showAddButton`): Toggle add entry button

#### **Data Settings**
- **Default Date** (`defaultDate`): Initial date filter (YYYY-MM-DD format)
- **Available Classes** (`availableClasses`): Comma-separated list of class names
- **API Endpoint** (`apiEndpoint`): External data source URL
- **Results Per Page** (`resultsPerPage`): Pagination limit (5-100)

#### **Permissions**
- **Allow Edit** (`allowEdit`): Enable edit functionality
- **Allow Delete** (`allowDelete`): Enable delete functionality

#### **Appearance**
- **Color Theme** (`theme`): Choose from default, blue, green, purple
- **Compact Mode** (`compactMode`): Space-saving layout

### Example Configuration

```javascript
{
  title: "Klassenbuch Fehlzeiten",
  showFilters: true,
  showExportButton: true,
  showAddButton: true,
  defaultDate: "2025-08-18",
  availableClasses: "5a,5b,6a,6b,7a,7b,7c,8a",
  allowEdit: true,
  allowDelete: false,
  theme: "blue",
  compactMode: false,
  resultsPerPage: 25
}
```

## 🔗 Events & Workflows

The component emits custom events that can trigger WeWeb workflows:

### Event Types

1. **`dashboard-add-entry`**: User clicks "Add Entry" button
2. **`dashboard-edit-entry`**: User edits an existing entry
3. **`dashboard-delete-entry`**: User deletes an entry
4. **`dashboard-export`**: User exports data (CSV, XLSX, PDF)
5. **`dashboard-filter-change`**: User changes filter settings
6. **`dashboard-data-load`**: Data is loaded/refreshed

### Event Data Structure

```javascript
// Add Entry Event
{
  elementId: "ww-element-123",
  pageId: "page-456", 
  data: {}
}

// Edit Entry Event
{
  elementId: "ww-element-123",
  pageId: "page-456",
  data: {
    id: "entry-789",
    studentName: "Max Müller",
    studentClass: "7c",
    // ... other entry properties
  }
}

// Export Event
{
  elementId: "ww-element-123", 
  pageId: "page-456",
  data: {
    format: "csv", // or "xlsx", "pdf"
    data: [...] // filtered data array
  }
}
```

### Setting Up Workflows

1. **In WeWeb Editor**: Go to Workflows → Add Trigger → Custom Event
2. **Event Name**: Use one of the dashboard events (e.g., `dashboard-add-entry`)
3. **Configure Actions**: Add your desired workflow actions (redirect, API call, etc.)

## 🗄️ Data Integration

### Using Mock Data
By default, the component includes sample data for immediate testing.

### Connecting External API
Set the `apiEndpoint` property to your data source:

```
https://api.yourschool.com/absences
```

Expected API response format:
```javascript
[
  {
    id: "1",
    studentName: "Max Müller", 
    studentClass: "7c",
    date: "18.08.2025",
    dateRange: "08:00–09:30", // optional, null for full day
    duration: "Zeitfenster", // or "Ganzer Tag"
    status: "verspätet", // krankgemeldet, unentschuldigt, beurlaubt, ungeklärt, verspätet
    reason: "Verschlafen",
    hasAttachment: false,
    hasAccess: true,
    createdBy: "Teacher Name",
    createdAt: "18.08.2025, 09:45",
    sourceType: "anwesenheit" // eltern-app, anwesenheit, schuleingabe
  }
  // ... more entries
]
```

### Database Integration
Connect to your database through WeWeb's data sources:

1. **Create Data Source**: WeWeb Admin → Data Sources → Add New
2. **Configure Connection**: Set up your database connection
3. **Map Fields**: Ensure field names match the expected format above
4. **Bind to Component**: Use WeWeb's data binding to connect the data source

## 🎨 Styling & Themes

### Built-in Themes
- **Default**: Standard blue-gray color scheme
- **Blue**: Professional blue theme
- **Green**: Fresh green theme  
- **Purple**: Modern purple theme

### Custom Styling
Add custom CSS through WeWeb's styling interface or create CSS variables:

```css
.ww-theme-custom {
  --ww-primary-color: #your-color;
  --ww-primary-light: #your-light-color;
  --ww-primary-dark: #your-dark-color;
}
```

### Responsive Behavior
The component automatically adapts to:
- Desktop: Full table layout
- Tablet: Adjusted spacing and layout
- Mobile: Stacked/simplified view

## 🔧 Development

### Local Development
```bash
# Watch mode for development
npm run dev

# Build for production  
npm run build

# Lint code
npm run lint
```

### Testing Changes
1. Make changes to source files
2. Run `npm run build`
3. Upload updated component to WeWeb
4. Test in WeWeb editor and preview

## 🚨 Troubleshooting

### Component Not Loading
- Verify all dependencies are installed
- Check that build completed successfully
- Ensure React/ReactDOM versions are compatible
- Review browser console for errors

### Data Not Displaying
- Check API endpoint configuration
- Verify data format matches expected structure
- Review network requests in browser dev tools
- Ensure WeWeb data binding is configured correctly

### Styling Issues
- Component uses scoped CSS to avoid conflicts
- Check for CSS specificity issues
- Verify theme configuration is applied
- Use browser dev tools to inspect styles

### Events Not Firing
- Verify event names match exactly (case-sensitive)
- Check WeWeb workflow configuration
- Review browser console for JavaScript errors
- Ensure event handlers are properly set up

### Performance Issues
- Check `resultsPerPage` setting for large datasets
- Consider enabling compact mode for better performance
- Optimize API response size
- Use browser dev tools to profile performance

## 📊 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Notes

- API endpoints should use HTTPS
- Implement proper authentication for data access
- Validate user permissions before allowing edit/delete operations
- Sanitize user input in forms

## 📜 License

MIT License - see LICENSE file for details.

## 🤝 Support

For issues specific to this WeWeb component:
1. Check this README for common solutions
2. Review WeWeb's custom component documentation
3. Check browser console for error messages
4. Create an issue in the component repository

For WeWeb platform issues:
- Contact WeWeb support
- Check WeWeb documentation at https://docs.weweb.io

## 🔄 Version History

### v1.0.0
- Initial WeWeb React wrapper
- Complete feature parity with original React app
- Theme support and responsive design
- Event system for WeWeb workflows
- Comprehensive configuration options

---

**Ready to use!** 🎉 Your existing React attendance dashboard is now fully integrated with WeWeb while preserving all its functionality and adding powerful visual configuration capabilities.
