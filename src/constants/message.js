const ERROR_MESSAGE = {
  MAX_LENGTH: 6,
  NAME_ALREADY_IN_USE: "이미 사용 중인 이름입니다.",
  INVALID_CHARACTERS: "특수문자는 사용 할 수 없습니다.",
  NAME_TOO_LONG: (MAX_LENGTH) => `이름은 ${MAX_LENGTH}자 이내로 입력해주세요.`,
  NO_NAME: "존재하지 않는 이름입니다.",
};

export default ERROR_MESSAGE;
