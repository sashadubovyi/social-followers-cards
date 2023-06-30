import { NavLink } from "react-router-dom/dist";
import styled from "styled-components";

export const UsersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadMoreBtn = styled.button`
  width: 196px;
  height: 50px;
  border: none;
  border-radius: 10px;
  padding: 14px, 28px;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  line-height: 21.94px;
  color: #373737;
  text-transform: uppercase;
  font-size: 20px;
  border: 1px solid #e7eae8;
  opacity: 0.8;
  cursor: pointer;
`;

export const GoHome = styled(NavLink)`
  width: 196px;
  height: 50px;
  border: none;
  border-radius: 10px;
  padding: 14px, 28px;
  background-color: rgb(235, 216, 255);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 17px;
  line-height: 21.94px;
  color: #373737;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const Select = styled.select`
  width: 196px;
  height: 50px;
  border: none;
  border-radius: 10px;
  padding: 14px, 28px;
  background-color: rgb(235, 216, 255);
  cursor: pointer;
  text-decoration: none;
  padding-left: 10px;
  font-weight: 500;
  font-size: 17px;
  line-height: 21.94px;
  color: #373737;
  text-transform: uppercase;
  outline: transparent;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;
