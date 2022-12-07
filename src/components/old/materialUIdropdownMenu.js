import React from 'react';
import { Box, Button, Menu, MenuItem, Slide } from "@material-ui/core";
import { useState } from "react";

function App() {
  const [anchor, setAnchor] = useState(null);
  const options = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"];

  const [selected, setSelected] = useState(-1);

  const openMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchor(null);
  };

  const onMenuItemClick = (event, index) => {
    setAnchor(null);
    setSelected(index);
  };
  return (
    <Box m={50}>
      <Button onClick={openMenu} color="primary" variant="contained">
        Click me
      </Button>

      <Menu
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={closeMenu}
        keepMounted
        TransitionComponent={Slide}
        PaperProps={{
          style: {
            maxHeight: 40 * 4,
            width: "20ch",
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={(event) => onMenuItemClick(event, index)}
            selected={index === selected}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default App;