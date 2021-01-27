import React, { useContext } from 'react';
import { AppContext } from '../UseContext';

function Messages() {

  const { demo } = useContext(AppContext);

  return (
    <div>
      Messages: { demo }
    </div>
  )
}

export default Messages;
