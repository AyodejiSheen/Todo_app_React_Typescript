import { ChangeEvent, FC, useState } from "react";

export interface Props {

}

export const MakeState: FC = () => {
  const [about, setAbout] = useState<string | null>(null);

  const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
    setAbout(event.target.value)
  }

  return(
    <>
        <div>
            <input placeholder="write about yourself" onChange={handleChange}/>
            {/* <input placeholder="write about yourself" onChange={(event: React.ChangeEvent<HTMLInputElement>) => (setAbout(event.target.value))}/> */}
        </div>

        <div>
            {about}
        </div>
    </>
  )
};
