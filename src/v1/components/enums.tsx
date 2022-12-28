
export enum HairColor {
    Blonde = "Your haircolor is blonde, good",
    Brown = "your hair color is brown",
    Pink = "You dye your hair pinks"
}


export interface Props {
    hairColor: HairColor
}


export const AddEnums: React.FC<Props> = ({ hairColor }) => {

    //using enum and Types


    //how to use type
    type NameType = "john" | "samuel" | "Ayodeji"  
    const checkName: NameType = "Ayodeji"       // this variable can only use the values defined as type of NameType--- assigning it to other values will not work


    return (
        <>
            {hairColor}
            {checkName}
        </>
    );
}
