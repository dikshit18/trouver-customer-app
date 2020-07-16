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
    path: "/auth",
    icon: <LoginOutlined />
  },
  {
    label: "My Cart",
    path: "/auth",
    icon: <ShoppingCartOutlined />
  },
  {
    label: "Profile",
    path: "/profile",
    icon: <ProfileOutlined />
  }
];

export default navButtons;
