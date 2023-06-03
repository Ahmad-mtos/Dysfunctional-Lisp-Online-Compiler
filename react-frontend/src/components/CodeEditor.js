import { useState } from 'react';

function CodeEditor() {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const sendData = (code, params) => {
    const data = { message: code , params: params};
  
    fetch('http://localhost:5000/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseData => {
        setOutput(responseData["message"])
      })
      .catch(error => {
        console.error(error);
      });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData(code, input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Code:</label>
        <textarea
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{ height: '200px', width: '100%' }}
        />
      </div>
      <div>
        <label>input:</label>
        <textarea
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ height: '20px', width: '80%' }}
        />
      </div>
      <div>
        <label>Output:</label>
        <textarea   
          value= {output}
          style={{ height: '20px', width: '50%' }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CodeEditor;
