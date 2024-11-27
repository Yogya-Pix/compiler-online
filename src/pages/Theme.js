import { extendTheme } from "@chakra-ui/react";
import { config } from "process";

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
});
export default theme;