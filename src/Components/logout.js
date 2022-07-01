import { useNavigate } from 'react-router-dom';

function Logout()
{
    let navigate = useNavigate();
    sessionStorage.removeItem("user");
    navigate("/Login");
   // window.location.reload(false);
return(
    <div>We are logged out</div>
)

};

export default Logout;