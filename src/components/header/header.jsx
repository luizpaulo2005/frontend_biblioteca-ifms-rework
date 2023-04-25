import { DropdownUser } from "../dropdown/dropdown_user";
import { DropdownAdmin } from "../dropdown/dropdown_admin";
import { useUser, UserButton } from "@clerk/clerk-react";

export const Header = () => {

  const {isSignedIn} = useUser()

  return (
    <div className="w-full h-24 rounded-md bg-green-600 flex justify-between items-center text-white p-2 dark:bg-green-800 overflow-hidden">
      <a href="/" className="font-semibold text-4xl ml-1">
        Biblioteca Digital - IFMS
      </a>
      <div className="flex">
        <DropdownUser />
        {isSignedIn && <DropdownAdmin/>}
        <button className="bg-slate-600 rounded-md h-12 pl-4 pr-4 m-1 transition-colors hover:bg-slate-500">
          {isSignedIn ? <UserButton/> : <a href="/login">Login</a>}
        </button>  
        
      </div>
    </div>
  );
};
