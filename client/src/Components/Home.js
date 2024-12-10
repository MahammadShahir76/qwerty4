import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

function Home() {

    return (

        <div>
            <div className="hero-section">

               
                <div className="heading">
                    <h1>Take Your Services</h1>
                    <h1>to the Next Level with ServiceHub</h1>
                    <div className="para">
                        <p>
                            At ServiceHub, we connect customers with trusted professionals from a variety of fields</p> <p>offering efficient, reliable, and accessible maintenance and repair services, anytime, anywhere.</p></div>
                </div>
                <div className="card-parent">
                    <div className="card">
                        <div className="box2">
                            <div className='Box1'>
                                <div className="box1-logo">
                                    <img src="./images/Identification.png" alt="" />
                                </div>
                                <div className="Link">
                                    <Link to="/ProviderInfo"><h2>Service Provider</h2></Link>
                                    <p>ServiceHub seamlessly connects customers with skilled professionals, allowing them to share their service requirements and ensuring the perfect match for their specific needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="box2">
                            <div className='Box1'>
                                <div className="box1-logo">
                                    <img src="./images/Business.png" alt="" />
                                </div>
                                <div className="Link">
                                    <Link to="/TakerInfo"><h2>Service Taker</h2></Link>
                                    <p>"ServiceHub connects customers with skilled professionals effortlessly. Users can easily share their service requirements, ensuring the right match for their needs and fostering seamless solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shiga">
                    <div className="heading">
                        <h2>Solving a minor problem using video Call</h2>

                    </div>
                    <div className="card-parent2">
                        <div className="card2">
                            <div className="box22">
                                <div className='Box12'>

                                    <div className="Link2">
                                        <Link to="/VideoTaker"><h2>Vendor</h2></Link>

                                    </div>
                                </div>
                            </div>
                            <div className="box22">
                                <div className='Box12'>

                                    <div className="Link2">
                                        <Link to="VideoTakerInfo"><h2>Client</h2></Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="features">
                    <div className="feature-h2">
                        <h2>Feature Boxes</h2>
                    </div>
                    <div className="feature-p">
                        <p>A good design is not only aesthetically pleasing, but also functional</p> <p>It should be able to solve the problem </p>
                    </div>
                    <div className="main-box">
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <img src="./images/Vector.png" alt="" />
                            </div>
                            <div className="box-h3"><h3>Service Management</h3></div>
                            <div className="box-p"><p>ServiceHub offers tools for professionals to organize, deliver, and track their services effortlessly.</p></div>

                        </div>
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <img src="./images/Group 104.png" alt="" />
                            </div>
                            <div className="boxe-h3"><h3>Professional Service Tools:</h3></div>
                            <div className="box-p"><p>ServiceHub equips professionals with efficient tools to evaluate, manage, and deliver top-notch services effortlessly.</p></div>

                        </div>
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <img src="./images/Group.png" alt="" />
                            </div>
                            <div className="boxe-h3"><h3>Company Profiles</h3></div>
                            <div className="box-p"><p>ServiceHub provides tools for professionals to schedule, conduct, and manage services seamlessly</p></div>
                        </div>
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <img src="./images/lap.png" alt="" />
                            </div>
                            <div className="boxe-h3"><h3>Company Profiles:</h3></div>
                            <div className="box-p"><p>ServiceHub enables businesses to showcase their expertise, build trust, and connect with potential clients effectively.</p></div>

                        </div>

                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <img src="./images/Task.png" alt="" />
                            </div>
                            <div className="boxe-h3"><h3>Feedback System:</h3></div>
                            <div className="box-p"><p>ServiceHub offers a robust feedback system, allowing users to rate and review services, ensuring quality and continuous improvement.</p></div>

                        </div>
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <img src="./images/sword.png" alt="" />
                            </div>
                            <div className="boxe-h3"><h3>Collaboration Tools</h3></div>
                            <div className="box-p"><p> ServiceHub provides tools for professionals to schedule, conduct, and manage services seamlessly.</p></div>
                        </div>
                    </div>
                    {/* <div className="img-slider">
                        <div className="slider">

                            <img src="./images/card12.png" alt="" />

                        </div>
                    </div> */}
                    <div className="GetTouch">
                        <div className="global">
                            <img src="./images/Global.png" alt="" />
                        </div>
                        <div className="form">
                            <h2>Get in touch</h2>
                            <div className="form-para">
                                <p>Your feedback helps us improve. Let us know what we’re doing well and.</p> <p> where we can enhance your experience. </p></div>
                            <div className="input1">
                                <input type="email" placeholder='Enter your mail' />
                                <input type="text" placeholder='Name' />
                            </div>
                            <div className="input2">
                                <input type="text" placeholder='Feedback' />
                            </div>
                            <div className="form-btn">
                                <button>
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>

                    <footer style={{ backgroundColor: '#18181C', color: '#fff', padding: '20px', textAlign: 'center' }}>
                        <div className="footer-container">
                            <div className="about-us">
                                <h3>About Us</h3>
                                <p>NextGen-Hire connects companies with fresh talent. We ensure skilled candidates are referred by experienced developers.</p>
                            </div>

                            <div className="links">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="/Home"><p>Home</p></Link></li>
                                    <li><Link to="/about"><p>About Us</p></Link></li>
                                    <li><Link to="/services"><p>Services</p></Link></li>
                                    <li><Link to="/contact"><p>Contact </p></Link></li>
                                </ul>
                            </div>

                            <div className="contact-info">
                                <h3>Contact Information</h3>
                                <p>Email: info@nextgen-hire.com</p>
                                <p>Phone: +1 (234) 567-8901</p>
                            </div>


                            <div className="social-media">
                                <h3>Follow Us</h3>
                                <Link to="#" target="_blank"><p>LinkedIn</p></Link>
                                <Link to="#" target="_blank"><p>Twitter</p></Link>
                                <Link to="#" target="_blank"><p>Facebook</p></Link>
                            </div>


                        </div>

                        <div className="footer-bottom">
                            <p>&copy; 2024 Network-Hub. All rights reserved.</p>
                        </div>
                    </footer>

                </div>
            </div>

            <div>

            </div>

        </div>
    )

}

export default Home
