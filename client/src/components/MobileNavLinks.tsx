import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { user, logout } = useAuth0();

  return (
    <>
      <Link
        to="/profile"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        {user?.name}
      </Link>

      <Button
        className="flex items-center font-bold hover:bg-gray-500"
        onClick={() => logout()}
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
