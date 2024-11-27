import { Box, HStack } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "../components/LanguageSelector";
import { CODE_SNIPPETS, SupportedLanguages } from "../components/constants";
import Output from "../components/output";

const Compiler: React.FC = () => {
  const editorRef = useRef<any>(null); // Reference for the editor
  const [value, setValue] = useState<string>(CODE_SNIPPETS.javascript); // Default language is JavaScript
  const [language, setLanguage] = useState<SupportedLanguages>("javascript");

  // Handle language change
  const onSelect = (language: SupportedLanguages) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  // Handle editor mount
  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
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
            onChange={(value) => setValue(value || "")}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default Compiler;
