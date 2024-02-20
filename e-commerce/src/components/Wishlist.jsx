import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Favorite from "@mui/icons-material/Favorite";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ProductContext from "./UseContext";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import axios from "axios";

const Wishlist = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [refresh, setrefresh] =useState(true)

    useEffect(()=>{
        const id = localStorage.getItem("id")
        axios(`http://localhost:8080/favorit/getall/${id}`)
        .then((result)=>{
            setData(result.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [refresh])

    const hundledislike = (id) => {
        axios.delete(`http://localhost:8080/favorit/dislike/${id}`)
        .then((result)=>{
            navigate('/wishlist')
            setrefresh(!refresh)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  return (
    <Box sx={{paddingLeft:"200px", paddingRight:'120px',gap:"10px", paddingTop:"100px", width:'100%'}}>
      {data.map((e) => {
        return (
          <Box
            display={"inline-flex"}
            sx={{ marginRight: "30px" }}
          >
            <Card
              sx={{
                width: 250,
                marginTop: "30px",
                backgroundColor: "rgba(245, 245, 245, 1)",
              }}
            >
              <div>
              <IconButton
                      aria-label="bookmark Bahamas Islands"
                      variant="plain"
                      color="neutral"
                      size="md"
                      sx={{
                        position: "absolute",
                        top: "0.3rem",
                        right: "0.5rem",
                        backgroundColor: "white",
                        borderRadius: "20px",
                        zIndex: 1,
                      }}
                      onClick={()=>hundledislike(e.idfavorit)}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
               
              </div>
              <AspectRatio
                sx={{ maxWidth: "90%", marginLeft: "50px" }}
                minHeight="120px"
                maxHeight="120px"
              >
                <img
                  style={{ width: "120px", height: "120px" }}
                  src={e.product.images[0].image}
                  alt="product"
                />
              </AspectRatio>
              <Button
                disabled={false}
                fullWidth
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{
                  alignSelf: "center",
                  fontWeight: 600,
                  backgroundColor: "black",
                  borderRadius: "none",
                }}
                onClick={()=>navigate('/oneview', {state: e.product})}
              >
                <AddShoppingCartIcon sx={{ marginRight: "15px" }} />
                Add to Cart
              </Button>

              <CardContent orientation="vertical" sx={{ gap: "5px" }}>
                <Typography level="title-lg">{e.product.productName}</Typography>
                <CardContent orientation="horizontal">
                  <Typography
                    fontSize="s"
                    fontWeight="lg"
                    sx={{ color: "red" }}
                  >
                    ${e.product.price}
                  </Typography>
                  <Stack
                    spacing={1}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "5px",
                    }}
                  >
                    <Rating
                      name="half-rating"
                      defaultValue={e.product.reviews.length}
                      precision={0.5}
                      readOnly
                    />
                    <span style={{ marginTop: "0px" }}>
                      ({e.product.reviews.length})
                    </span>
                  </Stack>
                </CardContent>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
}

export default Wishlist