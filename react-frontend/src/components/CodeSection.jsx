import React from 'react'
import { Button, Input } from 'antd';
import MyMonacoEditor from './MyMonacoEditor';
import { useState } from 'react';
import '../css/CodeSection.css'


const CodeSection = () => {
    const [code, setCode] = useState('');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);
    const base_url = import.meta.env.VITE_BASE_URL;

    const sendData = (code, params) => {
        const data = { message: code , params: params};
        
        setLoading(true);
        fetch(base_url + "api/data", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data).replace(/\\r/g, ''),
        
        })
            .then(response => response.json())
            .then(responseData => {
            setOutput(responseData["message"])
            setLoading(false);
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
       <div className='all'>
            <MyMonacoEditor setCode={setCode}/>

            <Input 
                addonBefore="Input"
                placeholder="Input" 
                onChange={(e) => setInput(e.target.value)} />

            <Button onClick={handleSubmit} type="primary" loading={loading}>
                Run
            </Button>

            <div className='output'>
                {output}
            </div>
        </div>
    )
}

export default CodeSection