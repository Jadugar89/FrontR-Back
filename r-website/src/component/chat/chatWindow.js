import React from 'react';

import Message from './chatmessage';

const chatWindow = (props) => {
    const chat = props.chat
        .map(m => <Message 
            key={Date.now() * Math.random()}
            user={m.user}
            message={m.message}/>);

    return(
        <div>
            {chat}
        </div>
    )
};

export default chatWindow;