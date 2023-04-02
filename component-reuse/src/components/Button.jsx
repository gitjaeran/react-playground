import React from "react";

/*
1. 가장 기본적인 구조만 구성하여 다양한 곳에서 재사용할 수 있어야 함. = 확장성 확보
2. 따라서 props를 통해 컴포넌트 조합 =>버튼 관련 기본 prop 배치

버튼에서 필요한게 무엇일까?
- 버튼의 타입(button, submit)
- 버튼 이름(가입하기, 추가하기, 수정하기, 삭제하기 등등)
- 아이콘(react-icons????)
- onClick event
이렇게 4개라고 가정하자.
*/

function Button({ children, onClick, icon, type }) {
  return (
    <button type={type} onClick={onClick}>
      {/* 아이콘이 들어가면 아이콘을 보여주고, 아이콘이 없다면 null로 처리되어 아무런 동작을 하지 않음 */}
      {icon && icon}
      {/* 버튼 이름(가입하기, 추가하기, 수정하기, 삭제하기 등등) */}
      {children}
    </button>
  );
}

export default Button;
