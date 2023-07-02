"use client";

import React from "react";
import Script from "next/script";
import { Providers } from "./providers";
import { Box, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

interface Props {
  children: React.ReactNode;
  pageName: string | null;
}

const RootLayout = ({ children, pageName }: Props) => {
  console.log(pageName);
  return (
    <html lang="en">
      <body>
        <Providers>
          <Script>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          </Script>

          <Box
            width={"100%"}
            height={"100vh"}
            bgGradient="linear(to-tr, #1d1128, #2a193d, #362154, #412a6c, #4c3385, #523c93, #5845a1, #5d4eb0, #6057b5, #6460ba, #6869bf, #6d72c3)"
          >
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
