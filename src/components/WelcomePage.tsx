import type { FC } from "react";

interface IProps{
  name:string;
  age:number;
  number:number;
}

const WelcomePage:FC<IProps> = ({name, age}) => {
  return (
    <h1>
      hello, my name is {name}, I am {age} years old.
    </h1>
  )
}

export default WelcomePage
/////