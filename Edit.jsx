import React, { useState } from 'react';

const Edit = () => {
  // State to store form data
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    fromLocation: '',
    toLocation: '',
    vehicleType: '',
    vehicleNumber: '',
    remark: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee added:', employee);
    // You can send the employee data to a server or perform other actions
    // For now, we just log the data to the console
    alert('Employee added successfully!');
  };

  return (
    <div className="form-container">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select
            id="department"
            name="department"
            value={employee.department}
            onChange={handleChange}
            required
          >
            <option value="">Select a department</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="fromLocation">From Location</label>
          <input
            type="text"
            id="fromLocation"
            name="fromLocation"
            value={employee.fromLocation}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="toLocation">To Location</label>
          <input
            type="text"
            id="toLocation"
            name="toLocation"
            value={employee.toLocation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="vehicleType">Vehicle Type</label>
          <select
            id="vehicleType"
            name="vehicleType"
            value={employee.vehicleType}
            onChange={handleChange}
            required
          >
            <option value="">Select a vehicle type</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Truck">Truck</option>
            <option value="Bus">Bus</option>
            <option value="Van">Van</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="vehicleNumber">Vehicle Number</label>
          <input
            type="text"
            id="vehicleNumber"
            name="vehicleNumber"
            value={employee.vehicleNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="remark">Remark</label>
          <input
            type="text"
            id="remark"
            name="remark"
            value={employee.remark}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button type="submit">Edit Employee</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
