import React, { Fragment } from 'react';
// import UncontrolledDemo from './UncontrolledDemo';
// import ProtalsDemo from './ProtalsDemo';
// import ContextDemo from './ContextDemo';
import LazyDemo from './LazyDemo';

function AdvancedUse(props) {
  return (
    <Fragment>
      {/* <UncontrolledDemo /> */}
      {/* <ProtalsDemo>
        <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>类比vue-slot</div>
      </ProtalsDemo> */}
      {/* <ContextDemo /> */}
      <LazyDemo />
    </Fragment>
  )
}

export default AdvancedUse;
