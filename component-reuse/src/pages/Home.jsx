import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { FaCheck } from "react-icons/fa";

function Home() {
  const [email, setEmail] = useState("");

  const onChangeHandler = e => {
    setEmail(e.target.value);
  };

  const onClickHandler = e => {
    e.preventDefault();
    alert("완료");
    setEmail("");
  };

  return (
    <form>
      <label>내용 1: </label>
      <Input
        type="email"
        name="email"
        value={email}
        onChange={onChangeHandler}
        placeholder="Enter your email"
      />
      <Button type="submit" onClick={onClickHandler} icon={<FaCheck />}>
        제출하기
      </Button>
    </form>
  );
}

export default Home;
