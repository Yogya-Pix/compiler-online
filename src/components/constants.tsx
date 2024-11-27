// Define a type for supported languages
// constants.ts or a separate types file
export type SupportedLanguages = "javascript" | "typescript" | "python" | "java" | "csharp" | "php";


// Define the version map for each language
export const LANGUAGE_VERSIONS: Record<SupportedLanguages, string> = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  java: "15.0.2",
  python: "3.10.0",
  csharp: "6.12.0",
  php: "8.2.3",
};

// Define code snippets for each language
export const CODE_SNIPPETS: Record<SupportedLanguages, string> = {
  javascript: `
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alex");
`,
  typescript: `
type Params = {
  name: string;
}

function greet(data: Params) {
  console.log("Hello, " + data.name + "!");
}

greet({ name: "Alex" });
`,
  python: `
def greet(name):
  print("Hello, " + name + "!")

greet("Alex")
`,
  java: `
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
`,
  csharp: `
using System;

namespace HelloWorld
{
  class Hello { 
    static void Main(string[] args) {
      Console.WriteLine("Hello World in C#");
    }
  }
}
`,
  php: `<?php

$name = 'Alex';
echo $name;
`,
};
