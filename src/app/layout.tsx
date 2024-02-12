import { Stack } from "@chakra-ui/react";
import Provider from "~/modules/providers/chakraProvider";
import React from "react";
import Navbard from "~/modules/components/Navbar";

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = function ({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Pizzaria Alto Astral</title>
      </head>

      <body>
        <Provider>
          <Stack minH="100vh" maxW="100vw" direction="column" spacing="0px">
            <Navbard />
            {children}
          </Stack>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
