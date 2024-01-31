import React, { useState } from 'react';

const SegmentEditor = () => {
  const [segmentName, setSegmentName] = useState('');
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [newSchema, setNewSchema] = useState('');
  const [availableSchemas, setAvailableSchemas] = useState([
    { label: 'First Name', value: 'first_name' },
    { label: 'Last Name', value: 'last_name' },
    { label: 'Gender', value: 'gender' },
    { label: 'Age', value: 'age' },
    { label: 'Account Name', value: 'account_name' },
    { label: 'City', value: 'city' },
    { label: 'State', value: 'state' },
  ]);

  const handleSaveSegment = () => {
    // Format data and send to the server
    const dataToSend = {
      segmentName,
      selectedSchemas,
    };
    console.log('Data to send:', dataToSend);
    // You can send the data to the server using an API call here
  };

  const handleAddNewSchema = () => {
    if (newSchema && !selectedSchemas.includes(newSchema)) {
      setSelectedSchemas([...selectedSchemas, newSchema]);
      setNewSchema('');
    }
  };

  return (
    <div style={containerStyle}>
    <button style={buttonStyle} onClick={() => alert('Popup with segment details')}>
      Save Segment
    </button>
    <div>
      <input
        type="text"
        placeholder="Enter Segment Name"
        value={segmentName}
        onChange={(e) => setSegmentName(e.target.value)}
        style={inputStyle}
      />
    </div>
    <div>
      <label style={{marginLeft:10,fontSize:18,fontWeight:'600'}}>Add schema to segment:</label>
      <select
        value={newSchema}
        onChange={(e) => setNewSchema(e.target.value)}
        style={selectStyle}
      >
        <option value="">Select Schema</option>
        {availableSchemas.map((schema) => (
          <option key={schema.value} value={schema.value}>
            {schema.label}
          </option>
        ))}
      </select>
      <button style={addButtonStyle} onClick={handleAddNewSchema}>
        + Add New Schema
      </button>
    </div>
    <div style={segmentListStyle}>
      {selectedSchemas.map((selectedSchema) => (
        <div key={selectedSchema}>{selectedSchema}</div>
      ))}
    </div>
    <button style={buttonStyle} onClick={handleSaveSegment}>
      Save The Segment
    </button>
  </div>
  );
  
};
const containerStyle = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '50px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    margin: 10,
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: 10
  };

  const selectStyle = {
    width: '100%',
    padding: '8px',
    margin: 8,
    boxSizing: 'border-box',
  };

  const addButtonStyle = {
    backgroundColor: '#008CBA',
    color: 'white',
    padding: '8px',
    marginLeft: '8px',
    borderRadius: '3px',
    cursor: 'pointer',
    border:'none'
  };

  const segmentListStyle = {
    backgroundColor: 'lightblue',
    padding: '10px',
    marginTop: '10px',
    borderRadius: '5px',
  };

export default SegmentEditor;
