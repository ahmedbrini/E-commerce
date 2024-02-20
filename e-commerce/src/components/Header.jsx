import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import productData from "./UseContext";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const data = useContext(productData);
  const [name, setName] = useState("");
  const [searchy, setSearchy] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const setsearch = () => {
    var filtered = data.filter((e) => {
      return e.productName === name;
    });
    console.log(filtered);
    if (!filtered.length) {
      navigate("/notfound");
    } else setSearchy(filtered);
  };

  const handleLogout = () => {
    // axios.delete(`http://localhost:8080/token/delete/${localStorage.getItem("id")}`)
    //   .then(() => {
        navigate("/signin");
        localStorage.clear();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "transparent", boxShadow: "none", paddingTop: "20px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 15,
              display: { xs: "none", md: "flex" },
              fontFamily: "Inter",
              fontSize: "24px",
              lineHeight: "24px",
              fontWeight: 700,
              letterSpacing: "3%",
              color: "black",
              textDecoration: "none",
            }}
          >
            Exclusive
          </Typography>
          <Box sx={{ display: "flex", ml: "330px" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "Poppins",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                letterSpacing: "3%",
                color: "black",
                textDecoration: "none",
              }}
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/contact"
              sx={{
                ml: "50px",
                display: { xs: "none", md: "flex" },
                fontFamily: "Poppins",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                letterSpacing: "3%",
                color: "black",
                textDecoration: "none",
              }}
            >
              Contact
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/aboutus"
              sx={{
                ml: "50px",
                display: { xs: "none", md: "flex" },
                fontFamily: "Poppins",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                letterSpacing: "3%",
                color: "black",
                textDecoration: "none",
              }}
            >
              About
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/signup"
              sx={{
                ml: "50px",
                display: { xs: "none", md: "flex" },
                fontFamily: "Poppins",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                letterSpacing: "3%",
                color: "black",
                textDecoration: "none",
              }}
            >
              Sign Up
            </Typography>
          </Box>
        </Toolbar>
        <div style={{ width: "100%" }}>
          <div
            style={{
              border: "10px",
              marginTop: "-60px",
              marginLeft: "1000px",
              alignContent: "center",
            }}
          >
            <Button
              sx={{ marginTop: "15px" }}
              onClick={() => {
                setsearch();
              }}
            >
              <SearchIcon></SearchIcon>
            </Button>
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              sx={{ color: "black" }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div style={{ marginTop: "-37px", marginLeft: "260px" }}>
              <Button
                onClick={() => {
                  navigate("/wishlist");
                }}
              >
                <FavoriteBorderIcon
                  sx={{ color: "black" }}
                ></FavoriteBorderIcon>
              </Button>
            </div>
            <div style={{ marginLeft: "320px", marginTop: "-37px" }}>
              <Button
                onClick={() => {
                  navigate("/shop");
                }}
              >
                <ShoppingCartIcon sx={{ color: "black" }}></ShoppingCartIcon>
              </Button>
            </div>
            <div style={{ marginTop: "-37px", marginLeft: "380px" }}>
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <PersonIcon sx={{ color: "black" }}></PersonIcon>
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;
