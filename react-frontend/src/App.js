import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import MyMonacoEditor from './components/MyMonacoEditor';
import CodeSection from './components/CodeSection'
import "./App.css"

function App() {
  const [code, setCode] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div className='app'>
      <CodeSection/>
    </div>
  );
}

export default App;
