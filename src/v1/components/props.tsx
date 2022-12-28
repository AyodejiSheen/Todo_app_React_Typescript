import { FC } from "react"; 



//interface is how you give types to props passed into a component
interface Props {
  age?: number;         //the --?-- makes it optional if its available or not
  name?: string;
  email: string;        // this email is not optional

  //fucntion passed into props
  getName?: () => string; //this function returns a string
  getMilk?: (name: string) => void; // this function accept a parameter name and doesnot return anything
}



export const Person:FC <Props> = ({name, age, email, getMilk, getName}) => {  //how to get props
  return <div>
    <h1>{age}</h1>
    <h1>{name}</h1>
    <h1>{email}</h1>
  </div>;
};
