import { ChangeEvent, useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CartReducerInitialState,
  UserReducerInitialState,
} from "../types/reducer";
import { NewOrderRequest } from "../types/api";
import { useNewOrderMutation } from "../redux/api/orderAPI";

const Shipping = () => {
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
  });

  const { cartItems, subtotal, tax, discount, shippingCharges, total } =
    useSelector(
      (state: { cartReducer: CartReducerInitialState }) => state.cartReducer
    );
  const { user } = useSelector(
    (state: { userReducer: UserReducerInitialState }) => state.userReducer
  );

  const [newOrder] = useNewOrderMutation();

  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const orderData: NewOrderRequest = {
    shippingCharges,
    shippingInfo,
    orderItems: cartItems,
    subtotal,
    tax,
    discount,
    total,
    user: user?._id!,
  };
  useEffect(() => {
    if (cartItems.length <= 0) return navigate("/cart");
  }, [cartItems]);

  const handleOrderPlacement = () => {
    newOrder(orderData);
    navigate("/orders");
  };

  return (
    <div className="shipping">
      <button className="back-btn" onClick={() => navigate("/cart")}>
        <BiArrowBack />
      </button>
      <h1>Shipping Address</h1>
      <form>
        <input
          required
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          value={shippingInfo.address}
        />
        <input
          required
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          value={shippingInfo.city}
        />
        <input
          required
          type="text"
          name="state"
          placeholder="State"
          onChange={handleChange}
          value={shippingInfo.state}
        />
        <select
          required
          name="country"
          value={shippingInfo.country}
          onChange={handleChange}
        >
          <option value="">Choose Country</option>
          <option value="india">India</option>
        </select>
        <input
          required
          type="number"
          name="pinCode"
          placeholder="Pincode"
          onChange={handleChange}
          value={shippingInfo.pinCode}
        />
        <button
          type="submit"
          onClick={() => {
            handleOrderPlacement();
          }}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Shipping;
