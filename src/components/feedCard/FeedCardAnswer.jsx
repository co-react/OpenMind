import { useState } from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import InputTextArea from "../input/InputTextArea";

function FeedCardAnswer({ answer, profile, ansName, ansDate, ansDesc, state }) {
  const {id, questionId, content, isRejected, createdAt} = answer;
  console.log(id, questionId, content, isRejected, createdAt, ansDesc)
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <CardAnswerContainer>
      <ProfileImage src={profile} alt="" />
      <AnswerContainer>
        <AnswerTop>
          <AnswerName>{ansName}</AnswerName>
          <AnswerDate>{ansDate}</AnswerDate>
        </AnswerTop>
        {state === "Empty" ? (
          <>
            <InputTextArea
              placeholder="답변을 입력해주세요"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button color="brown" disabled={inputValue.trim() === ""}>
              답변완료
            </Button>
          </>
        ) : state === "Sent" ? (
          <AnswerDescription>{content}</AnswerDescription>
        ) : state === "Resection" ? (
          <AnswerResection>답변 거절</AnswerResection>
        ) : null}
      </AnswerContainer>
    </CardAnswerContainer>
  );
}

export default FeedCardAnswer;

const CardAnswerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  @media (min-width: 768px) {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`;

const AnswerTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
`;

const AnswerName = styled.div`
  color: var(--Grayscale-60);
  font-size: 1.4rem;
  line-height: 133.333%;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const AnswerDate = styled.div`
  font-size: 1.4rem;
  line-height: 128.571%;
`;

const AnswerDescription = styled.div`
  font-size: 1.6rem;
  line-height: 137.5%;
`;

const AnswerResection = styled.div`
  color: var(--Red-50);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 137.5%;
`;
