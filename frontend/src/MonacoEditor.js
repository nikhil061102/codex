import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

const MonacoEditor = ({ language, value, onChange, mode, fontSize }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        const editor = monaco.editor.create(editorRef.current, {
            value,
            language,
            automaticLayout: true,
            theme: mode === 'dark' ? 'vs-dark' : 'vs-light', // Theme selection based on mode
            fontSize: fontSize || 14, // Default font size or custom font size
        });

        editor.onDidChangeModelContent(() => {
            onChange(editor.getValue());
        });

        return () => editor.dispose();
    }, [language, value, onChange, mode, fontSize]);

    const handleCopyToClipboard = () => {
        const textToCopy = monaco.editor.getModels()[0].getValue();
        navigator.clipboard.writeText(textToCopy);
    };

    return (
        <div style={{ height: '100%', border: '1px solid #ccc' }}>
            <div ref={editorRef} style={{ height: '100%' }}></div>
            <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
        </div>
    );
};

export default MonacoEditor;
