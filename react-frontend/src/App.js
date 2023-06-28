import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import MyMonacoEditor from './components/MyMonacoEditor';

function App() {
  const [code, setCode] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div>
      <MyMonacoEditor onCodeChange={handleCodeChange} />
      <CodeEditor code={code} />
    </div>
  );
}

export default App;
