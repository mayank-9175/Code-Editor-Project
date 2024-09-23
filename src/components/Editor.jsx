import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "../App.css";
const Heading = styled(Box)`
  background-color: #1d1e22;
  display: flex;
  padding: 10px 12px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;
`;

const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 8px 8px;
`;
const Editor = ({ heading, icon, color, value, onChange }) => {
  const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <>
      <Container style={open?null:{flexGrow:0}}>
        <Header>
          <Heading>
            <Box
              component="span"
              style={{
                width: 20,
                height: 20,
                backgroundColor: color,
                display: "flex",
                placeContent: "center",
                paddingBottom: 2,
                marginRight: 5,
                borderRadius: 5,
                color: "black",
              }}
            >
              {icon}
            </Box>
            {heading}
          </Heading>
          <CloseFullscreenIcon
            className="controlled-editor"
            style={{cursor:'pointer',alignSelf:"center"}}
            fontSize="small"
            onClick={() => setOpen((prevState) => !prevState)}
          />
        </Header>
        <ControlEditor
          value={value}
          onBeforeChange={handleChange}
          options={{
            theme: "material",
            lineNumbers: true,
          }}
        />
      </Container>
    </>
  );
};

export default Editor;
