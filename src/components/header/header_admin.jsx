import { DropdownUser } from "../dropdown/dropdown_user";
import { DropdownAdmin } from "../dropdown/dropdown_admin";

export const HeaderAdmin = () => {
  return (
    <div className="w-full h-24 rounded-md bg-green-600 flex justify-between text-white p-2 dark:bg-green-800">
      <a href="/" className="self-center font-semibold text-4xl ml-1">
        Biblioteca Digital - IFMS
      </a>
      <div className="self-center overflow-hidden">
        <DropdownUser />
        <DropdownAdmin />
        <button className="bg-slate-600 rounded-md pt-2 pb-2 pl-4 pr-4 m-1 transition-colors hover:bg-slate-500">
          Botão
        </button>
        <button className="bg-blue-600 rounded-md pt-2 pb-2 pl-4 pr-4 m-1 transition-colors hover:bg-slate-500">
          Login
        </button>
      </div>
    </div>
  );
};
