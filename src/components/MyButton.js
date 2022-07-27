const MyButton = ({ text, type, onClick }) => {
  // type이 포함되지 않을 경우 default하기
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")} // class를 join으로 공백을 넣어ㅓ 합쳐주기
      onClick={onClick}
    >
      {text}
    </button>
  );
};
// type의 기본값 설정
MyButton.defaultProps = {
  type: "default",
};
export default MyButton;
