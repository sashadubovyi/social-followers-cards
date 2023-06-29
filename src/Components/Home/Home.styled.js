import styled from "styled-components";
import chicks from "../../images/chick.png";
import { NavLink } from "react-router-dom/dist";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  background-image: url(${chicks});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position-x: center;
  background-position-y: calc(50% + 100px);

  @media (min-width: 768px) {
    background-size: 50%;
    background-position-x: calc(50% + 150px);
    background-position-y: calc(50% + 50px);
  }

  @media (min-width: 1280px) {
    background-size: 40%;
    background-position-x: calc(50% + 300px);
    background-position-y: calc(50% + 20px);
  }

  animation: scale-up-hor-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @keyframes scale-up-hor-right {
    0% {
      transform: scaleX(0.4);
      transform-origin: 100% 100%;
    }
    100% {
      transform: scaleX(1);
      transform-origin: 100% 100%;
    }
  }
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 24.38px;
  text-transform: uppercase;
  color: #8c57c4;

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1280px) {
    font-size: 50px;
  }
`;

export const SubTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 21.94px;
  color: #373737;
  text-transform: uppercase;
  width: 300px;

  @media (min-width: 768px) {
    font-size: 12px;
    width: 350px;
  }

  @media (min-width: 1280px) {
    font-size: 18px;
    width: 550px;
  }
`;

export const GoToUsers = styled(NavLink)`
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
    border-radius: 20px 0px 20px 20px;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;
