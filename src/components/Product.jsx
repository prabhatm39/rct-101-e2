import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Stack, Heading, Tag, TagLabel } from '@chakra-ui/react'

const Product = () => {
  const [product, setProduct] = useState([])
  // TODO: Remove below const and instead import them from chakra
  useEffect(() => {
   axios.get("http://localhost:8080/products")
   .then((d) => {
     setProduct([product, d.data])
   })
      },[])
      console.log(product[1])


  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;

  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (

<>

    <Stack data-cy="product">

    

      <Image data-cy="product-image"   />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
      
    </Stack>
    <div>
      {product[1].map((pro) => {
        <div> <img src={pro.imageSrc} alt="" /> </div>
      })}
    </div>
    </>
  );
};

export default Product;
