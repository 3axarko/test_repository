import MyButton from './MyButton';
import React from 'react';

const App = () => {
  return (
    <div
      style={{
        background: "cyan",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>App 2</h2>
      <MyButton>ButtonName</MyButton>
    </div>
  );
}

  

export default App;
