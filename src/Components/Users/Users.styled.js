import styled from "styled-components";

export const UserItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @keyframes scale-up-center {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const UserCard = styled.div`
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
  padding-bottom: 36px;
  position: relative;
  transition: all 0.2s ease-in-out;

  ${({ isFollowing }) => {
    return isFollowing
      ? "background: linear-gradient(142deg, rgb(71, 28, 169) 0%, rgb(163, 54, 123) 69.1%, rgb(153, 41, 146) 100%);"
      : "";
  }}
`;

export const ChatImg = styled.img`
  z-index: 1;
  margin-top: 55px;
  margin-bottom: auto;
  width: 308px;
  height: 168px;
  pointer-events: none;
`;

export const GoIT = styled.img`
  z-index: 2;
  position: absolute;
  top: -90%;
  left: -5%;
  pointer-events: none;
`;

export const Box = styled.div`
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 300px;
`;

export const UserImg = styled.img`
  width: 63px;
  height: 63px;
  border-radius: 50%;
  z-index: 3;
  pointer-events: none;
`;

export const Imgborder = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ebd8ff;
  box-shadow: inset 0 4.391631126403809px 3.2937235832214355px 0 #fbf8ff,
    0 4.391631126403809px 4.391631126403809px 0 #000000,
    inset 0 -2.1958155632019043px 4.391631126403809px 0 #ae7be3;
  pointer-events: none;
`;

export const Tweets = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24.38px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 0px;
  margin-top: 26px;
`;

export const Border = styled.img`
  position: absolute;
  z-index: 4;
  margin-bottom: 149px;
  pointer-events: none;
`;

export const Line = styled.img`
  position: absolute;
  z-index: 2;
  margin-bottom: 185px;
  pointer-events: none;
`;

export const Followers = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24.38px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-top: 16px;
  margin-bottom: 26px;
`;

export const ButtonFollowing = styled.button`
  width: 196px;
  height: 50px;
  border: none;
  border-radius: 10px;
  padding: 14px, 28px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-radius: 20px 0px 20px 20px;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }

  ${({ isFollowing }) => {
    return isFollowing
      ? "background-color: #5CD3A8"
      : "background-color: #ebd8ff";
  }}
`;

export const BtnText = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 21.94px;
  color: #373737;
  text-transform: uppercase;
  width: 100px;
`;
