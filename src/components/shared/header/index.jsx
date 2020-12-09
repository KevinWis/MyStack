import { HeaderDiv } from "./style";
import { IconButton } from "@material-ui/core";
import { GiHamburgerMenu } from "react-icons/gi";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (url) => {
    handleClose();
    history.push(url);
  };

  return (
    <>
      <HeaderDiv>
        <h1>My Dev</h1>
        <div>
          <IconButton onClick={handleClick}>
            <GiHamburgerMenu />
          </IconButton>
          <Menu
            id="hamburger"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                handleMenuItemClick("/");
              }}
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuItemClick("/");
              }}
            >
              PlaceHolder2
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuItemClick("/");
              }}
            >
              PlaceHolder3
            </MenuItem>
          </Menu>
        </div>
      </HeaderDiv>
    </>
  );
};

export default Header;
