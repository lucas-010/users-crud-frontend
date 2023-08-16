import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #1e3a8a;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledContainerImg = styled.div`
  width: 80px;
`;

export const StyledImg = styled.img`
  width: 100%;
`;

export const StyledLinksList = styled.ul`
  display: flex;
  list-style: none;
`;

export const StyledLink = styled(Link)`
  background-color: white;
  text-decoration: none;
  font-size: 16pt;
  font-weight: bold;
  color: #1e3a8a;
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
`;

export const StyledListItem = styled.li``;
