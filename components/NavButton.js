import Link from "next/link";
import { withRouter } from "next/router";
import styled from "styled-components";
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

const NavButton = props => {
  const getColor = () =>
    props.router.pathname === props.path ? "var(--highlight)" : "";
  return (
    <Link href={props.path}>
      <div
        style={{
          color: getColor()
        }}
      >
        <Icon>{props.icon}</Icon>
        <Label>{props.label}</Label>
      </div>
    </Link>
  );
};

export default withRouter(NavButton);
