import { useState } from "react";
import { updateUser } from "../../Redux/operations";
import {
  Border,
  Box,
  ChatImg,
  Line,
  Tweets,
  UserImg,
  UserCard,
  UserItem,
  GoIT,
  Followers,
  ButtonFollowing,
  BtnText,
} from "./Users.styled";
import chat from "../../images/chat.png";
import borderImg from "../../images/ellips.png";
import line from "../../images/line.png";
import goit from "../../images/logo.png";

function Users({
  user: { id, avatar, followers, tweets, name },
  isFollowing,
  setIsFollowing,
}) {
  const [followersCount, setFollowersCount] = useState(followers);

  const changeFollowBtn = () => {
    if (!isFollowing.includes(id)) {
      setIsFollowing((prevstate) => [...prevstate, id]);
      updateUser(id, {
        id,
        avatar,
        name,
        tweets,
        followers: followersCount + 1,
        following: true,
      });
      setFollowersCount((prev) => +prev + 1);
    } else {
      setIsFollowing((prevstate) => prevstate.filter((el) => el !== id));
      updateUser(id, {
        id,
        avatar,
        name,
        tweets,
        followers: followersCount - 1,
        following: false,
      });
      setFollowersCount((prev) => +prev - 1);
      return;
    }
  };

  const formatNum = (number) => {
    return new Intl.NumberFormat("en-US", {
      useGrouping: true,
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <>
      <UserItem>
        <UserCard key={id} isFollowing={isFollowing.includes(id)}>
          <ChatImg src={chat} alt="chat" />
          <Box>
            <GoIT src={goit} alt="goit" />
            <Border src={borderImg} alt="border" />
            <UserImg src={avatar} alt="avatar" />
            <Line src={line} alt="line" />
            <Tweets>{tweets} tweets</Tweets>
            <Followers>{formatNum(followersCount)} followers</Followers>
            <ButtonFollowing
              onClick={changeFollowBtn}
              isFollowing={isFollowing.includes(id)}
            >
              <BtnText>
                {isFollowing.includes(id) ? "Following" : "Follow"}
              </BtnText>
            </ButtonFollowing>
          </Box>
        </UserCard>
      </UserItem>
    </>
  );
}

export default Users;
