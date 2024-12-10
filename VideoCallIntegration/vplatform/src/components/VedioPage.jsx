import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from './constant';
import emailjs from 'emailjs-com';

const VedioPage = () => {
  const { id } = useParams();
  const roomID = id;

  const [meetingLink, setMeetingLink] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [videoInitialized, setVideoInitialized] = useState(false); // State to track video initialization
  const [showButtons, setShowButtons] = useState(false); // State to track button visibility

  useEffect(() => {
    const myMeeting = async (element) => {
      // Generate Kit Token
      const appID = APP_ID;
      const serverSecret = SERVER_SECRET;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "rahul");

      // Create instance object from Kit Token
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // Generate link
      const link = `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`;
      setMeetingLink(link); // Store the meeting link in state

      // Start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy link',
            url: link,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // 1-on-1 call
        },
      });

      setVideoInitialized(true); // Set video as initialized
      setShowButtons(true); // Show buttons after video is initialized
    };

    // Initialize the meeting when the component mounts
    const element = document.getElementById('meeting-container');
    myMeeting(element);
  }, [roomID]);

  const sendEmail = () => {
    const templateParams = {
      to_name: 'Rahul', // Change to the recipient's name
      meeting_link: meetingLink,
      to_email: 'fathimathzahida21@gmail.com', // Change to the recipient's email
      from_name: 'xyz', // Add your name
      message: 'Here is the link to join the meeting.',
    };

    emailjs.send('service_yh4gxva', 'template_azq4nj9', templateParams, '0byiYl0nzuLlAoS8Q') // Use your Public Key
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setEmailSent(true); // Set email sent status to true
        },
        (error) => {
          console.error('Failed to send email.', error);
          setEmailSent(false); // Set email sent status to false if there is an error
        }
      );
  };

  return (
    <div>
      <div id="meeting-container"></div>
        <div style={{ marginTop: '20px' }}>
          <button onClick={sendEmail} style={{ marginRight: '10px' }}>
            Send Meeting Link to Email
          </button>
          <button><a href='http://localhost:3000/add-Review'>End the meeting</a></button>
          <br></br>
        </div>
     
      {emailSent && <p style={{ color: 'green', marginTop: '10px' }}>Email sent successfully!</p>}
      
    </div>
  );
};

export default VedioPage;
