// config/buttons.js

import React from "react";
import {
  CompassOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
  ProfileOutlined
} from "@ant-design/icons";
import CartModal from "../components/CartModal";
const navButtons = [
  {
    label: "Orders",
    path: "/orders",
    icon: <CompassOutlined />
  },
  {
    label: "Login/Signup",
    path: "/login",
    icon: <LoginOutlined />
  },
  {
    label: "My Cart",
    path: "",
    icon: <ShoppingCartOutlined />,
    onClickHandler: CartModal
  },
  {
    label: "Profile",
    path: "/profile",
    icon: <ProfileOutlined />
  }
];

export default navButtons;
