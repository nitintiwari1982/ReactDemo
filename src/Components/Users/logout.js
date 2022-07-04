import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout()
{
    var navigate = useNavigate();
    useEffect(() =>{
        removeUser();
    });

    const removeUser =() =>
    {
        sessionStorage.removeItem("user");
        navigate("/Login");
    }
   
return(
    <div>We are logged out</div>
)

};

export default Logout;