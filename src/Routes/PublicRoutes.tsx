import type { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


interface PublicRoutesProps {
    children: JSX.Element
}
const PublicRoutes: React.FC<PublicRoutesProps> = ({children}) => {

    const token = useSelector((state : any)=> state.jwt);
    const user = useSelector((state : any)=> state.user);
    const userInfo = user?.role;
    const role = userInfo? userInfo.split('_') : [];

    console.log("token", token);

    if(!token){
        return children;
    }
    console.log( "user from public routes : "+role[1]);
    return <Navigate to={(`/${role[1].toLowerCase()}`)}/>
}

export default PublicRoutes;