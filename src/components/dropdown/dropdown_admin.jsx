import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretDown } from "phosphor-react";

export const DropdownAdmin = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        type="button"
        className="inline-flex gap-2 items-center bg-slate-600 rounded-md pt-2 pb-2 pl-4 pr-4 m-1 transition-colors hover:bg-slate-500"
      >
        Categorias Admin
        <CaretDown size={22} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-slate-600 p-2 rounded-md text-white mt-1">
          <DropdownMenu.Item>
            <a href="/admin/discentes">Alunos</a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a href="/admin/campus">Campus</a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a href="/admin/cursos">Cursos</a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a href="/admin/discentes">Matriculas</a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a href="/admin/pesquisas">Pesquisas</a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a href="/admin/docentes">Professores</a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
