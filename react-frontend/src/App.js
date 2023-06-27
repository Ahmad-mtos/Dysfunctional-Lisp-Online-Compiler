import './App.css';
import CodeEditor from './components/CodeEditor';
import Editor from "@monaco-editor/react"
import MonacoEditor from './components/MonacoEditor';
function App() {

  return (
    <div>
    <MonacoEditor
      height="100vh"
      width="100%"
      theme="vs-dark"
      defaultLanguage="python"
    />
    <CodeEditor/>
    </div>
  );
}

export default App;
