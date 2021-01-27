import React, { Fragment } from 'react';
import { UseState } from './Hooks/UseState';
import { UseContext } from './Hooks/UseContext';
import { UseReducer } from './Hooks/UseReducer';
import { UseEffect } from './Hooks/UseEffect';
import DIYHook from './Hooks/DIYHook';

function App() {
  return (
    <Fragment>
      <UseState />
      <UseContext/>
      <UseReducer />
      <UseEffect />
      <DIYHook />
    </Fragment>
  );
}

export default App;
