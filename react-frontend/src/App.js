import './App.css';
import CodeEditor from './components/CodeEditor';
import Editor from "@monaco-editor/react"
function App() {

  return (
    <div>
    <Editor
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
