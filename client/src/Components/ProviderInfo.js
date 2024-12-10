import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ProviderInfo.css';

function ProviderInfo() {
    const [FullName, setFullName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Address, setAddress] = useState('');
    const [ServiceCategory, setServiceCategory] = useState('');
    const [Specialisation, setSpecialisation] = useState('');
    const [Experience, setExperience] = useState('');
    const [ToolsOwned, setToolsOwned] = useState('');
    const [Availability, setAvailability] = useState('');
    const [Error, setError] = useState(false);

    const addProvider = async () => {
        if (!FullName || !PhoneNumber || !Address || !ServiceCategory || !Specialisation || !Experience || !ToolsOwned || !Availability) {
            setError(true);
            return;
        }

        let result = await fetch("http://localhost:5000/add-ProviderInfo", {
            method: "post",
            body: JSON.stringify({
                FullName,
                PhoneNumber,
                Address,
                ServiceCategory,
                Specialisation,
                Experience,
                ToolsOwned,
                Availability
            }),
            headers: { "Content-Type": "application/json" },
        });

        result = await result.json();
        console.log(result);
    };

    return (
        <div className="mainProvider">
            <div className="containerProvider">
                <h1 className="titleProvider">Service Provider Profile</h1>

                <div className="inputBoxProvider">
                    <input
                        type="text"
                        className="inputFieldProvider"
                        placeholder="Enter full name"
                        onChange={(e) => setFullName(e.target.value)}
                        value={FullName}
                    />
                    {Error && !FullName && <span className="errorProvider">Enter valid name</span>}
                </div>

                <div className="inputBoxProvider">
                    <input
                        type="number"
                        className="inputFieldProvider"
                        placeholder="Enter contact number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={PhoneNumber}
                    />
                    {Error && !PhoneNumber && <span className="errorProvider">Enter valid number</span>}
                </div>

                <div className="inputBoxProvider">
                    <input
                        type="text"
                        className="inputFieldProvider"
                        placeholder="Enter address"
                        onChange={(e) => setAddress(e.target.value)}
                        value={Address}
                    />
                    {Error && !Address && <span className="errorProvider">Enter valid address</span>}
                </div>

                <div className="inputBoxProvider">
                    <select
                        className="selectProvider"
                        onChange={(e) => setServiceCategory(e.target.value)}
                        value={ServiceCategory}
                    >
                        <option value="">Select</option>
                        <option value="Plumbers">Plumbing</option>
                        <option value="Electricians">Electricians</option>
                        <option value="Ac Mechanics">Ac Mechanics</option>
                    </select>
                    {Error && !ServiceCategory && <span className="errorProvider">Enter valid service category</span>}
                </div>

                <div className="inputBoxProvider">
                    <input
                        type="text"
                        className="inputFieldProvider"
                        placeholder="Enter specialisation"
                        onChange={(e) => setSpecialisation(e.target.value)}
                        value={Specialisation}
                    />
                    {Error && !Specialisation && <span className="errorProvider">Enter valid specialisation</span>}
                </div>

                <div className="inputBoxProvider">
                    <input
                        type="text"
                        className="inputFieldProvider"
                        placeholder="Enter years of experience"
                        onChange={(e) => setExperience(e.target.value)}
                        value={Experience}
                    />
                    {Error && !Experience && <span className="errorProvider">Enter valid experience</span>}
                </div>

                <div className="inputBoxProvider">
                    <input
                        type="text"
                        className="inputFieldProvider"
                        placeholder="Enter tools owned"
                        onChange={(e) => setToolsOwned(e.target.value)}
                        value={ToolsOwned}
                    />
                    {Error && !ToolsOwned && <span className="errorProvider">Enter valid tools</span>}
                </div>

                <div className="inputBoxProvider">
                    <input
                        type="text"
                        className="inputFieldProvider"
                        placeholder="Enter availability (e.g., Weekdays 9 AM - 5 PM)"
                        onChange={(e) => setAvailability(e.target.value)}
                        value={Availability}
                    />
                    {Error && !Availability && <span className="errorProvider">Enter valid availability</span>}
                </div>

                <div className="inputBoxProvider">
                    <button type="button" className="buttonProvider" onClick={addProvider}>
                        Add Details
                    </button>
                    <Link to="/SeeProviders" className="linkProvider">See Service Takers</Link><br />
                    <Link to="/CategorySelection" className="linkProvider">Next</Link>
                </div>
            </div>
        </div>
    );
}

export default ProviderInfo;
