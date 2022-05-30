import React from "react";
import AddProduct from '../components/AddProduct.jsx';
import Product from "../components/Product.jsx";
import Pagination from '../components/Pagination.jsx';
import { Flex } from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react';
// import { useEffect } from "react";
// import axios from 'axios';
// import { Flex } from "@chakra-ui/react/dist/declarations/src/index.js";

const Products = () => {
  
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex>
      {/*  AddProduct */}
     
      <AddProduct />
      <Grid>{/* List of Products */}
      <Product  />
      </Grid>
      {/* Pagination */}
      <Pagination />
    </Flex>
  );
};

export default Products;
