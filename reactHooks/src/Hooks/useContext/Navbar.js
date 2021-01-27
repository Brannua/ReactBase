import React, { useContext } from 'react';
import { AppContext } from '../UseContext';

function Navbar() {
  const { demo } = useContext(AppContext);

  return (
    <div>
      Navbar: { demo }
    </div>
  )
}

export default Navbar;
