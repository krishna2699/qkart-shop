import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
   <Card className="card">
    <CardActionArea>
      <CardMedia
        component="img"
        alt="green iguana"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle2" component="div">
          {product.name}
        </Typography>
        <Typography variant="h7" sx={{fontWeight:'bold'}}>
        ${product.cost}
        </Typography>
        <Box>
          <Rating name="read-only" value={product.rating} readOnly size='small' />
          </Box>
      </CardContent>
      </CardActionArea>
      <CardActions>
      
          <Button variant={'contained'} fullWidth>ADD TO CART</Button>
    
      </CardActions>
  </Card>

  );
};

export default ProductCard;
