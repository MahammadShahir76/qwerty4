import React, { useState } from "react";
import { Link } from "react-router-dom";
import './TakerInfo.css';


function TakerInfo() {
    const [FullName, setFullName] = useState('');
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [ServiceCategory, setServiceCategory] = useState('');
    const [Budget, setBudget] = useState('');
    const [Description, setDescription] = useState('');
    const [ProblemDStartedOn, setProblemDStartedOn] = useState('');
    const [problemImg, setProblemImg] = useState('');
    const [Emergency, setEmergency] = useState('');
    const [Error, setError] = useState(false);

    const addTaker = async () => {
        if (
            !FullName ||
            !Email ||
            !Address ||
            !ServiceCategory ||
            !Budget ||
            !Description ||
            !ProblemDStartedOn ||
            !problemImg ||
            !Emergency
        ) {
            setError(true);
            return;
        }

        let result = await fetch("http://localhost:5000/add-TakerInfo", {
            method: "post",
            body: JSON.stringify({
                FullName,
                Email,
                Address,
                ServiceCategory,
                Budget,
                Description,
                ProblemDStartedOn,
                problemImg,
                Emergency
            }),
            headers: { "Content-Type": "application/json" },
        });

        result = await result.json();
        console.log(result);
    };

    return (
        <div className="main343">
        <div className="container54321">
            <h1 className="title54321">Service Taker Profile</h1>

            <div className="inputBox54321">
                <input
                    type="text"
                    className="inputField54321"
                    placeholder="Enter full name"
                    onChange={(e) => setFullName(e.target.value)}
                    value={FullName}
                />
                {Error && !FullName && <span className="error54321">Enter valid name</span>}
            </div>

            <div className="inputBox54321">
                <input
                    type="email"
                    className="inputField54321"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                />
                {Error && !Email && <span className="error54321">Enter valid email</span>}
            </div>

            <div className="inputBox54321">
                <input
                    type="text"
                    className="inputField54321"
                    placeholder="Enter address"
                    onChange={(e) => setAddress(e.target.value)}
                    value={Address}
                />
                {Error && !Address && <span className="error54321">Enter valid address</span>}
            </div>

            <div className="inputBox54321">
                <select
                    className="select54321"
                    onChange={(e) => setServiceCategory(e.target.value)}
                    value={ServiceCategory}
                >
                    <option value="">Select</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Electricians">Electricians</option>
                    <option value="Ac Mechanics">Ac Mechanics</option>
                </select>
                {Error && !ServiceCategory && <span className="error54321">Enter valid service category</span>}
            </div>

            <div className="inputBox54321">
                <input
                    type="number"
                    className="inputField54321"
                    placeholder="Enter budget"
                    onChange={(e) => setBudget(e.target.value)}
                    value={Budget}
                />
                {Error && !Budget && <span className="error54321">Enter valid budget</span>}
            </div>

            <div className="inputBox54321">
                <textarea
                    className="textarea54321"
                    placeholder="Enter description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={Description}
                />
                {Error && !Description && <span className="error54321">Enter valid description</span>}
            </div>

            <div className="inputBox54321">
                <label htmlFor="problemDate" className="label54321">
                    When did the problem start? 
                </label>
                <input
                    id="problemDate"
                    type="date"
                    className="inputField54321"
                    onChange={(e) => setProblemDStartedOn(e.target.value)}
                    value={ProblemDStartedOn}
                />
                {Error && !ProblemDStartedOn && <span className="error54321">Enter a valid date</span>}
            </div>


            <div className="inputBox54321">
                <input
                    type="text"
                    className="inputField54321"
                    placeholder="Enter problem image URL"
                    onChange={(e) => setProblemImg(e.target.value)}
                    value={problemImg}
                />
                {Error && !problemImg && <span className="error54321">Enter valid image URL</span>}
            </div>

            <div className="inputBox54321">
                <input
                    type="text"
                    className="inputField54321"
                    placeholder="Is the problem an emergency?"
                    onChange={(e) => setEmergency(e.target.value)}
                    value={Emergency}
                />
                {Error && !Emergency && <span className="error54321">Enter valid answer</span>}
            </div>

            <div className="inputBox54321">
                <button type="button" className="button54321" onClick={addTaker}>
                    Add Details
                </button>
                <Link to="/SeeProviders" className="link54321">See Service providers</Link><br />
                <Link to="/nextTakerInfo" className="link54321">Next</Link>
            </div>
        </div>
        </div>
    );
}

export default TakerInfo;