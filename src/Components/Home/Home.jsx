import { GoToUsers, Main, SubTitle, Title } from "./Home.styled";
import title from "../../images/icecream.png";

function Home() {
  return (
    <>
      <Main>
        {/* <Title>WetChicks</Title> */}
        <Title src={title} alt="wetchicks" />
        <SubTitle>
          Welcome to Ice Cream - a social network where you can follow
          interesting users and their tweets. Join us today and gain access to
          captivating content and make new connections.
        </SubTitle>
        <GoToUsers to={"/users"}>Take Flight</GoToUsers>
      </Main>
    </>
  );
}

export default Home;
