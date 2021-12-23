import React from 'react';
import parse from 'html-react-parser';

const MyMessage = ({ message }) => {
    if(message?.attachments?.length > 0){
        return (
            <img
              src={message.attachments[0].file}
              className='message-image'
              style={{float:'right'}}
              alt="No Image"
            />
        )
    }

    return (
        <div className='message' style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            {parse(message.text)}
        </div>
    );
};

export default MyMessage;