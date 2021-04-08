import React, { useEffect } from "react";
import { addProductToCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { link } from "react-router-dom";

export default function CartScreen({ match, location, history }) {
  const productId = match.params.id;
  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  useEffect(
    (params) => {
      if (productId) {
        dispatch(addProductToCart(productId, quantity));
      }
    },
    [dispatch, productId, quantity]
  );

  return <div>Cart</div>;
}
