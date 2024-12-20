import { Box, Button, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { executeCode } from "./api";
import { SupportedLanguages } from "./constants";

const Output = ({
  editorRef,
  language,
}: {
  editorRef: React.MutableRefObject<any>;
  language: SupportedLanguages;
}) => {
  const toast = useToast();

  const [output, setOutput] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);
      const result = await executeCode(language, sourceCode);

      // Adjust the structure based on the actual response
      if (result.run.stderr) {
        setIsError(true);
        setOutput([result.run.stderr]);
      } else {
        setIsError(false);
        setOutput(result.run.stdout.split("\n"));
      }
    } catch (error: any) {
      console.error(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code.",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
      >
        {output.length > 0
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
};

export default Output;
