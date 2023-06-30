import styled from "styled-components";
import logo from "../../images/icecreamlogo.png";
import { NavLink } from "react-router-dom/dist";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
  background-position-y: calc(50% + 100px);

  @media (min-width: 768px) {
    background-size: 50%;
  }

  @media (min-width: 1280px) {
    background-size: 40%;
    background-position-y: calc(50% + 150px);
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

export const Title = styled.img`
  width: 350px;
  @media (min-width: 768px) {
    width: 600px;
  }

  @media (min-width: 1280px) {
    width: 1000px;
  }
`;

export const SubTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 21.94px;
  color: #373737;
  width: 300px;
  text-align: center;

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
