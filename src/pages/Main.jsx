import { Link } from "react-router-dom";
import styled from "styled-components";
import mainImg from "../assets/png/guys.png";
import { ReactComponent as Logo } from "../assets/svg/icons/logo.svg";
import Button from "../components/buttons/ArrowIconButton";
import Stack from "../components/common/Stack";
import CreateQuestionCard from "../domain/CreateQuestionCard";

function Main() {
  return (
    <Container gap={24}>
      <Link to="/main">
        <MainLogo />
      </Link>
      <GoToASK variant="outline" hasIcon>
        질문하러 가기
      </GoToASK>
      <CreateQuestionCard />
      <ImgContainer>
        <MainImg src={mainImg} />
      </ImgContainer>
    </Container>
  );
}

export default Main;

const Container = styled(Stack)`
  margin-top: 8rem;
  @media (min-width: 768px) {
    position: static;
    margin-top: 16rem;
  }
`;

const MainLogo = styled(Logo)`
  width: 24.8rem;
  height: 9.8rem;
  @media (min-width: 768px) {
    width: 45.6rem;
    height: 18rem;
  }
`;

const GoToASK = styled(Button)`
  @media (min-width: 768px) {
    position: absolute;
    top: 4.4rem;
    right: 5rem;
  }
  @media (min-width: 1200px) {
    right: 13rem;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  position: absolute;
  top: 25rem;
  height: 30rem;
  overflow: hidden;
  z-index: -1;

  @media (min-width: 768px) {
    top: 38rem;
    height: 50rem;
  }
  @media (min-width: 1200px) {
    top: 7.5rem;
    height: 120rem;
  }
`;

const MainImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
