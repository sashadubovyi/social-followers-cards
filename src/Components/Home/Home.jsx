import { GoToUsers, Main, SubTitle, Title } from "./Home.styled";

function Home() {
  return (
    <>
      <Main>
        <Title>WetChicks</Title>
        <SubTitle>
          WetChicks is a new social network to unite chicks from all over the
          world. <br />
          Welcome chick.
        </SubTitle>
        <GoToUsers to={"users"}>Take Flight</GoToUsers>
      </Main>
    </>
  );
}

export default Home;
