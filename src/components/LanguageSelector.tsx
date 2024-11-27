import React from "react";
import { Box, Menu, Button, MenuButton, MenuList, Text, MenuItem } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS, SupportedLanguages } from "./constants"; // Ensure SupportedLanguages is imported

type LanguageSelectorProps = {
  language: SupportedLanguages; // The language should now be typed as SupportedLanguages
  onSelect: (language: SupportedLanguages) => void; // onSelect function expects a SupportedLanguages type
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onSelect }) => {
  const languages = Object.entries(LANGUAGE_VERSIONS);

  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">Language:</Text>
      <Menu isLazy>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList bg="#110c1b">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              onClick={() => onSelect(lang as SupportedLanguages)} // Ensure the selected language is cast to SupportedLanguages type
            >
              {lang} <Text as="span" fontSize="sm">({version})</Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
