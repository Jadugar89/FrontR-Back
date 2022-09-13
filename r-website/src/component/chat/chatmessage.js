import React from 'react';

const Message = (props) => (
    <div className='ChatMessage'>
        <p><strong>{props.user}</strong>: {props.message}</p>
    </div>
);

export default Message;