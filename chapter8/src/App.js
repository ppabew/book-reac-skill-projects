import Info from './Info';
import React, { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <br />
      {visible && <Info />}
    </div>
  );
}

export default App;
