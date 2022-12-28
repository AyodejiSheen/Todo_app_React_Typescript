import React, { FC } from 'react'

const Basic: FC = () => {

    //to create a variable in typescript
    const name: string = "Adeyemi Ayodeji"
    const age: number = 25
    const isAuthenticated: boolean = false
    let size: string | number //size can be a string and also a number

    let hobbies: string[] //to declare an array of just strings
    let student: unknown[] //to declare an array of any type (its recommended instead of using :any)


    // to declare an object
    // 1--- you first create a type of that object
    type Person = {
        name: string;
        age?: number;  //age is optional
    }

    // 2--- to declare the object in respect to the type
    let person: Person = {
        name: "ayodeji",
        age: 34
    }


    //to declare an array of object {is an array of person Object (type of Person)}
    let lotsOfPeople: Person[];







    //to create a function (the function is returning a number)
    const getName = (name: string): number => {
        if (name === "Adeyemi Ayodeji") {
            return 20
        } else {
            return 0
        }
    }

    //to create a function (the function doesnot return anything not important to put void tho)
    //OR you use never dont return anything buh void returns undefined
    const getMilk = (age: string): void | never => {

    }





    return (

        <>
            {name}
            {age}
            {isAuthenticated}
        </>
    )

}

export default Basic;