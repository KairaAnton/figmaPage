import { FC } from "react";

interface IProps{
    className:string

}
const SubNav:FC<IProps> = (props) => {
    return (
        <ul {...props}>
            <li>один айтем</li>
            <li>два айтем</li>
            <li>три айтем</li>
        </ul>
    );
}


export default SubNav;