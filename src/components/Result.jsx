import React, { useContext, useState, useEffect } from "react";
import { dataContext } from "../context/DataProvider";
import { Box } from "@mui/material";
const Result = () => {
  const [src, setSrc] = useState("");
  const { html, css, js } = useContext(dataContext);
  const srccode = `
      <html>
         <body>${html}</body>
         <style>${css}</style>
         <script>${js}</script>
      </html>
    `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srccode);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
    <Box>
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts"
        frameBorder={0}
        width="100%"
        height="100%"
      />
    </Box>
  );
};

export default Result;
