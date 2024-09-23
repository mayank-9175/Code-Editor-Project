import React, { useContext } from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { dataContext } from "../context/DataProvider";
const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  background: #060606;
`;
const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(dataContext);
  return (
    <Container>
      <Editor
        heading="HTML"
        icon="/"
        color="#ff3c41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="Javascript"
        icon="{ }"
        color="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default Code;
