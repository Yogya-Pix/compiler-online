import { Box, HStack } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "../components/LanguageSelector";
import { CODE_SNIPPETS } from "../components/constants";
import Output from "../components/output";

function Compiler() {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <div>
      <Box>
        <HStack spacing={4}>
          <Box w="50%">
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
              height="75vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Box>
          <Output editorRef={editorRef} language={language} />
        </HStack>
      </Box>
    </div>
  );
}

export default Compiler;
