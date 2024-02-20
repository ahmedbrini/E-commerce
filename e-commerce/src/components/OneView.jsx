import * as React from "react";
import { useLocation } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import { ButtonGroup, Input, Radio } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CachedIcon from "@mui/icons-material/Cached";
import SvgIcon from "@mui/material/SvgIcon";
import Icon from "@mui/material/Icon";
import axios from "axios";
import OneViewRelated from "./OneViewRelated";
import Foutree from "./Mbarki/Foutree";

const OneView = () => {
  const location = useLocation();
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [number, setNumber] = React.useState(1);
  const [quantity, setQuantity] = React.useState(0);
  const [image, setimage] = React.useState(location.state.images[0].image);
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
    <div
      style={{
        paddingLeft: "120px",
        paddingRight: "120px",
        paddingTop: "50px",
        width: "100%",
      }}
    >
      <Container sx={{ marginTop: "100px" }}>
        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: "0px",
            gap: "30px",
            width: "1170px",
            height: "600px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              width: "170px",
              height: "600px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              order: 0,
              flexGrow: 0,
            }}
          >
            {location.state.images.map((e) => {
              //   if (!e.image[0]) {
              return (
                <Button
                  onClick={() => setimage(e.image)}
                  color="false"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    width: "170px",
                    height: "138px",
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  <img style={{ zIndex: 1 }} width={135} src={e.image} alt="" />
                </Button>
              );
              //   }
            })}
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              width: "500px",
              height: "600px",
              gap: "20px",
              order: 1,
              flexGrow: 0,
            }}
          >
            {" "}
            <img width={"500px"} height={"600px"} src={image} alt="" />
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              width: "399px",
              height: "600px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              order: 2,
              flexGrow: 0,
            }}
          >
            <Typography sx={{ order: 0, fontWeight: "600", fontSize: "24px" }}>
              {location.state.productName}
            </Typography>

            <Stack
              spacing={1}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignContent: "center",
              }}
            >
              <Rating
                name="half-rating"
                defaultValue={location.state.reviews.length}
                precision={0.5}
              />

              <span style={{ marginTop: "5px", color: "gray" }}>
                ({location.state.reviews.length} Reviews)
              </span>
              <Divider orientation="vertical" flexItem />
              <span style={{ marginTop: "5px" }}>
                {location.state.quantity ? (
                  <Typography sx={{ color: "green" }}>in Stock</Typography>
                ) : (
                  <Typography sx={{ color: "red" }}>Out Of Stock</Typography>
                )}
              </span>
            </Stack>
            <Typography fontWeight={450} fontSize={"24px"}>
              ${location.state.price}
            </Typography>
            <Typography fontWeight={450} fontSize={"14px"}>
              {location.state.description}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                padding: "0px",
                gap: "30px",
                width: "155px",
                height: "20px",
              }}
            >
              <Typography>Colours:</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  padding: "0px",
                  marginTop: "0px",
                  width: "155px",
                  height: "15px",
                  gap: "5px",
                }}
              >
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                  sx={{
                    color: location.state.color,
                    "&.Mui-checked": {
                      color: location.state.color,
                      order: 0,
                    },
                    padding: "0px",
                  }}
                />
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "gray",
                      order: 1,
                    },
                    padding: "0px",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                padding: "0px",
                gap: "30px",
                width: "300px",
                height: "20px",
              }}
            >
              <Typography>Size:</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  padding: "0px",
                  marginTop: "0px",
                  width: "100%",
                  height: "10px",
                  gap: "15px",
                }}
              >
                <Button sx={{ width: "40px" }} variant="outlined">
                  <Typography>XS</Typography>
                </Button>
                <Button sx={{ width: "40px" }} variant="outlined">
                  <Typography>S</Typography>
                </Button>
                <Button sx={{ width: "40px" }} variant="outlined">
                  <Typography>M</Typography>
                </Button>
                <Button sx={{ width: "40px" }} variant="outlined">
                  <Typography>L</Typography>
                </Button>
                <Button sx={{ width: "40px" }} variant="outlined">
                  <Typography>XL</Typography>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                padding: "0px",
                marginTop: "20px",
                width: "100%",
                height: "44px",
                gap: "15px",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button
                  onClick={() => {
                    if (number > 1) {
                      setNumber(number - 1);
                    }
                  }}
                  color="white"
                >
                  <RemoveOutlinedIcon></RemoveOutlinedIcon>
                </Button>
                <Button
                  onChange={(e) => setQuantity(e.target.value)}
                  variant="outlined"
                  sx={{
                    width: "70px",
                    borderRadius: 0,
                    fontSize: "20px",
                    color: "black",
                  }}
                >
                  {number}
                </Button>
                <Button
                  onClick={() => {
                    setNumber(number + 1);
                  }}
                  color="danger"
                >
                  <AddOutlinedIcon></AddOutlinedIcon>
                </Button>
              </ButtonGroup>
              <Button
                color="danger"
                sx={{ width: 165, height: "44px" }}
              ></Button>
              <Button sx={{ height: "40px", width: "40px" }} variant="outlined">
                <FavoriteBorderIcon></FavoriteBorderIcon>
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                paddingTop: "17px",
                marginTop: "20px",
                width: "100%",
                height: "180px",
                gap: "5px",
                justifyContent: "center",
                alignContent: "center",
                border: "1px solid gray",
                borderRadius: "4px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  paddingLeft: "15px",
                  width: "100%",
                  height: "50px",
                  gap: "10px",
                  alignContent: "center",
                  borderBottom: "1px solid",
                }}
              >
                <SvgIcon fontSize={"large"}>
                  <AirportShuttleIcon></AirportShuttleIcon>
                </SvgIcon>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingLeft: "15px",
                    width: "100%",
                    height: "50px",
                    gap: "0px",
                    alignContent: "center",
                  }}
                >
                  <Typography fontSize={"16px"} fontWeight={500}>
                    Free Delivery
                  </Typography>
                  <Typography
                    fontSize={"12px"}
                    fontWeight={500}
                    sx={{ textDecorationLine: "underline" }}
                  >
                    Enter your postal code for Delivery Availability
                  </Typography>
                </Box>
              </Box>
              <Divider orientation="horizontal" variant="middle" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  paddingLeft: "15px",
                  width: "100%",
                  height: "50px",
                  gap: "10px",
                  alignContent: "center",
                }}
              >
                <SvgIcon fontSize={"large"}>
                  <CachedIcon></CachedIcon>
                </SvgIcon>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingLeft: "15px",
                    width: "100%",
                    height: "50px",
                    gap: "0px",
                    alignContent: "center",
                  }}
                >
                  <Typography fontSize={"16px"} fontWeight={500}>
                    Return Delivery
                  </Typography>
                  <Typography fontSize={"12px"} fontWeight={500}>
                    Free 30 Days Delivery Returns.{" "}
                    <Typography
                      fontSize={"12px"}
                      fontWeight={500}
                      sx={{ textDecorationLine: "underline" }}
                    >
                      Details
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <OneViewRelated />
      </Container>
    </div>
    <Foutree/>
    </div>
  );
};

export default OneView;
