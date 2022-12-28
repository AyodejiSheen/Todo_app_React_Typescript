import React, { FC } from 'react';
import './App.css';
import Basic from './basic';
import { AddEnums, HairColor } from './components/enums';
import { Person } from './components/props';
import { MakeState } from './components/state';

const App: FC = () => {


    //to create a function (the function doesnot return anything not important to put void tho)
    const getMilk = (age: string): void => {

    }



  return (
    <>
      <Basic />
      <Person name={"Adeyemi Ayo"} email={"aoluwasegun009@gmail.com"} age={22} getMilk={getMilk}/>
      <MakeState/>
      <AddEnums hairColor={HairColor.Blonde}/>
    </>

  )

}

export default App;
