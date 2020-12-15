import { HeaderDiv } from "./style";
import { IconButton } from "@material-ui/core";
import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from "../../../helpers/getImages";

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

  const token = localStorage.getItem("authToken");
  return (
    <>
      <HeaderDiv>
        <Logo
          width="4rem"
          smallWidth="4rem"
          func={() => history.push("/members")}
        />
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
                handleMenuItemClick("/members");
              }}
            >
              Membros
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleMenuItemClick("/register/1");
              }}
            >
              Registrar-se
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuItemClick("/page-success");
              }}
            >
              Conheça
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuItemClick("/my-profile");
              }}
            >
              Meu Perfil
            </MenuItem>
            {token ? (
              <MenuItem
                onClick={() => {
                  localStorage.removeItem("authToken");
                  localStorage.removeItem("userId");
                  handleMenuItemClick("/login");
                }}
              >
                Logout
              </MenuItem>
            ) : (
              <MenuItem
                onClick={() => {
                  handleMenuItemClick("/login");
                }}
              >
                Login
              </MenuItem>
            )}
          </Menu>
        </div>
      </HeaderDiv>
    </>
  );
};

export default Header;
