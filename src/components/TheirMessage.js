import React from 'react';
import parse from 'html-react-parser';

const TheirMessage = ({ lastMessage, message }) => {

    let isFirstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className='message-row'>
            {isFirstMessage && (
                    <div
                      className='message-avatar'
                      style={{ backgroundImage: message.sender && `url(${message.sender.avatar})`}}
                    />
                )
            }
            {message.attachments && message.attachments.length > 0 ? (
                <img
                    src={message.attachments[0].file}
                    className='message-image'
                    style={{ marginLeft:isFirstMessage ? '4px': '48px' }}
                    alt="attachment File"
                />
            ):(
                <div className='message' style={{ float:'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessage ? '4px' : '48px'}}>
                    {parse(message.text)}
                </div>
            )
            }
        </div>
    );
};

export default TheirMessage;