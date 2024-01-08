import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Scheduling() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        if (inputs.includes(undefined)) {
            event.preventDefault();
            alert("Please fill out all fields");
            [inputs, setInputs] = useState({});
        } else {
            var fs = require('fs');
            var json2csv = require('json2csv');
            var newLine = '\r\n';

            // add inputs as new line to csv. finalize csv structure first before doing this.
        }
    }
    return <div>
        <h1>Schedule an Appointment</h1>
        <div className="Contact-Info">
            <h2>Personal Information</h2>

            <form id="personal-info" method="POST" onSubmit={handleSubmit}>
                <label htmlFor="firstname">Legal First Name</label>
                <input name="firstname" placeholder="Enter first name..." type="text" value={inputs.firstname || ""} onChange={handleChange}/>

                <label htmlFor="lastname">Legal Last Name</label>
                <input name="lastname" placeholder="Enter last name..." type="text" value={inputs.lastname || ""} onChange={handleChange}/>

                {/* <label htmlFor="prefname">Preferred Name</label>
                <input name="prefname" placeholder="Enter preferreed name..." type="text" value={inputs.prefname || ""} onChange={handleChange}/> */}

                <label htmlFor="number">Phone Number</label>
                <input name="number" placeholder="XXX-XXX-XXXX" type="text" value={inputs.number || ""} onChange={handleChange}/>

                <label htmlFor="address">Address</label>
                <input name="address" placeholder="Street Name" type="text" value={inputs.address || ""} onChange={handleChange}/>

                <label htmlFor="city">City</label>
                <input name="city" placeholder="City" type="text" value={inputs.city || ""} onChange={handleChange}/>

                <label htmlFor="state">State</label>
                <input name="state" placeholder="State" type="text" value={inputs.state || ""} onChange={handleChange}/>

                <label htmlFor="zip">Zip Code</label>
                <input name="zip" placeholder="Zip code" type="number" value={inputs.zip || ""} onChange={handleChange}/>

                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email..." type="email" value={inputs.email || ""} onChange={handleChange}/>

                <label htmlFor="dob">Date of Birth</label>
                <input name="dob" placeholder="MM-DD-YYYY" type="text" value={inputs.dob || ""} onChange={handleChange}/>

                <label htmlFor="language">Preferred Language</label>
                <select placeholder="Select a language" value={inputs.language || ""} onChange={handleChange}>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                </select>
                {/* <input name="language" placeholder="English or Spanish" type="text" value={inputs.language || ""} onChange={handleChange}/> */}

                <div className="payment-method">
                    <label htmlFor="payment">Please select your preferred payment method</label>
                    <select placeholder="Select payment method" value={inputs.payment || ""} onChange={handleChange}>
                        <option value="oon">OON</option>
                        <option value="card">Card</option>
                    </select>
                    {/* <label htmlFor="oon">OON (Out of Network)</label>
                    <input name="oon" type="radio"/>
                    <label htmlFor="card">Card?</label>
                    <input name="card" type="radio" /> */}
                </div>
                <button type="submit"> Confirm Information </button>
            </form>
        </div>
        {/* <div className="Payment-Method">
            <form id="pay-method" method="POST">
                
            </form> */}
        {/* </div> */}
    </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Scheduling />);
// export default Scheduling;