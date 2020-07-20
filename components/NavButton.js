import React, { useState, useEffect } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import styled from "styled-components";
import CartModal from "./CartModal";
import { Modal, Badge } from "antd/";
const Icon = styled.div`
  font-size: 20px;
  width: 42px;
  height: 42px;
  border-radius: 2px;
  background: var(--primary);
  display: inline-block;
  vertical-align: middle;
  margin-top: 6px;
  margin-right: -1rem;
`;
const Label = styled.span`
  font-size: 12px;
  text-transform: capitalize;
`;

const NavButton = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClickHandler = () => {
    setIsModalOpen(true);
  };
  const onCloseHandler = () => {
    setIsModalOpen(false);
  };
  const getColor = () => (props.router.pathname === props.path ? "var(--highlight)" : "");
  return (
    // <Link href={props?.path ? props.path : ""}>
    <div
      style={{
        color: getColor(),
      }}
      onClick={props.label === "My Cart" && (() => onClickHandler())}>
      <Icon>
        <Badge count={props.label === "My Cart" ? props.badge : 0}>{props.icon}</Badge>
      </Icon>
      <Label>{props.label}</Label>
      <CartModal visible={isModalOpen} handleCancel={onCloseHandler} />
    </div>
    // </Link>
  );
};

export default withRouter(NavButton);
