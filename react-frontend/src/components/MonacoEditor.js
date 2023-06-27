import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

function registerCustomLanguage() {
    monaco.languages.register({ id: 'customLanguage' });
  
    // Define your syntax highlighting rules
    monaco.languages.setMonarchTokensProvider('customLanguage', {
        tokenizer: {
            root: [
              [/(quote|setq|func|lambda|prog|cond|while|return|break)\s/, 'keyword'], // Example: match "keyword1" and assign the "keyword" token type
              [/\d+/, 'number'], // Example: match any sequence of digits and assign the "number" token type
              [/"([^"\\]|\\.)*$/, 'string.invalid'], // Example: match an invalid string that is not closed and assign the "string.invalid" token type
              [/(plus|minus|times|divide|head|tail|cons|equal|nonequal|less|lesseq|greater|greatereq|isint|isbool|isreal|isnull|isatom|islist|and|or|xor|not|eval)\s/, 'string']
            ],
            
          }
    });
  
    // Define the language configuration
    monaco.languages.setLanguageConfiguration('customLanguage', {
      // Specify the language configuration here
    });
  }


function MonacoEditor() {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      // Initialize Monaco Editor
      const editor = monaco.editor.create(editorRef.current, {
        value: '',
        theme : "vs-dark",
        language: 'customLanguage' // Use the registered language ID
      });

      // Register your custom language
      registerCustomLanguage();

      return () => {
        editor.dispose(); // Cleanup the editor instance
      };
    }
  }, []);

  return <div ref={editorRef} style={{ width: '800px', height: '600px' }} />;
}

export default MonacoEditor;