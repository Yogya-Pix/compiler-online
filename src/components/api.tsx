import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

// Define the type for supported languages (keys of LANGUAGE_VERSIONS)
type SupportedLanguages = keyof typeof LANGUAGE_VERSIONS;

// Define the types for the function parameters
interface ExecuteCodeParams {
  language: SupportedLanguages; // Language must be one of the valid keys from LANGUAGE_VERSIONS
  sourceCode: string;
}

// Define the response structure (based on the API response)
interface ExecuteCodeResponse {
  run: {
    stdout: string;
    stderr: string | null;
    output: string;
    signal: string | null;
    code: number;
  };
}

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

// Define the function with proper typing
export const executeCode = async (
  language: SupportedLanguages, // Use SupportedLanguages type for the language
  sourceCode: string
): Promise<ExecuteCodeResponse> => {
  const response = await API.post<ExecuteCodeResponse>("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language], // No TypeScript error as LANGUAGE_VERSIONS[language] will be typed correctly
    files: [
      {
        content: sourceCode,
      },
    ],
  });

  return response.data;
};
