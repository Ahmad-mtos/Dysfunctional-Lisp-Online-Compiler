import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import MonacoEditor from 'react-monaco-editor';

function registerCustomLanguage() {
  monaco.languages.register({ id: 'customLanguage' });
  let keywords = ['quote', 'setq', 'func', 'lambda', 'prog', 'cond', 'while', 'return', 'break'];
  let predefined = ['plus', 'minus', 'times', 'divide', 'head', 'tail', 'cons', 'equal', 'nonequal', 'less', 'lesseq', 'greater', 'greatereq', 'isint', 'isbool', 'isreal', 'isnull', 'isatom', 'islist', 'and', 'or', 'xor', 'not', 'eval', 'isempty'];

  monaco.languages.setMonarchTokensProvider('customLanguage', {
    keywords,
    predefined,
    brackets: [
      { open: '(', close: ')', token: 'delimiter.parenthesis' },
    ],
    tokenizer: {
      root: [
        [/\btrue\b/, 'true'],
        [/\bfalse\b/, 'false'],
        [/@?[a-zA-Z][\w$]*/, {
          cases: {
            '@keywords': 'keyword',
            '@predefined': 'predefined',
            '@default': 'variable',
          },
        }],
        [/\/\/.*/, 'comment'],
        [/\b\d+\b/, 'number'],
      ],
    },
  });

  monaco.editor.defineTheme('customLanguage-theme', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'keyword', foreground: '#C586C0' },
      { token: 'predefined', foreground: '#9CDCFE' },
      { token: 'variable', foreground: '#D4D4D4' },
      { token: 'number', foreground: '#B5CEA8' },
      { token: 'comment', foreground: '#6A9955', fontStyle: 'italic' },
      { token: 'true', foreground: '#73C991' },
      { token: 'false', foreground: '#CE6D6D' },
      { token: 'delimiter.parenthesis', foreground: '#FF0000' },
    ],
    colors: {
      'editor.background': '#1E1E1E', // Set background color similar to VS Code
    },
  });
  const config = {
    surroundingPairs: [
      { open: '(', close: ')' },
    ],
    autoClosingPairs: [
      { open: '(', close: ')' },
    ],
  };
  monaco.languages.setLanguageConfiguration('customLanguage', config);
  monaco.languages.registerCompletionItemProvider('customLanguage', {
    provideCompletionItems: (model, position) => {
      const suggestions = [
        ...keywords.map((k) => ({
          label: k,
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: k,
        })),
        ...predefined.map((k) => ({
          label: k,
          kind: monaco.languages.CompletionItemKind.Predefined,
          insertText: k,
        })),
      ];
      return { suggestions: suggestions};
    },
  });
}

function MyMonacoEditor() {
  registerCustomLanguage();
  return (
    <MonacoEditor
      language="customLanguage"
      theme="customLanguage-theme"
      value=""
      width="800"
      height="600"
    />
  );
}

export default MyMonacoEditor;
