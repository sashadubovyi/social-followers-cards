import { NavLink } from "react-router-dom/dist";
import styled from "styled-components";

export const UsersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
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

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 21.94px;
  color: #373737;
  text-transform: uppercase;

  font-size: 20px;
  border: 1px solid #e7eae8;
  cursor: pointer;
  animation: bounce_513 1s infinite;

  @keyframes bounce_513 {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
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

  font-family: "Montserrat", sans-serif;
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

  font-family: "Montserrat", sans-serif;
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
