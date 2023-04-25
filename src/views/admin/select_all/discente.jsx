import { useEffect, useState } from "react";
import { api } from "../../../lib/axios"
import * as Dialog from "@radix-ui/react-dialog";
import { Helmet } from "react-helmet";
import { Header } from "../../../components/header/header";
import { FormCreateDiscente } from "../../../components/forms/create/discente";
import { Plus, X } from "phosphor-react";
import dayjs from "dayjs";


export const ASelectDiscenteAll = () => {
    const [attributes, setAttributes] = useState([]);

  const handleDelete = async (e) => {
    const { id } = e.target;
    await api
      .delete(`/discente/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api
      .get("/discentes/all")
      .then((res) => {
        setAttributes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-screen min-h-screen p-2 dark:text-white">
      <Helmet>
        <title>Admin - Lista de Alunos</title>
      </Helmet>
      <Header />
      <div>
        <div className="flex justify-between p-3">
          <div className="text-2xl">Lista de Alunos</div>
          <Dialog.Root>
            <Dialog.Trigger
              type="button"
              className="flex items-center border border-black p-2 rounded-md gap-2 transition-colors hover:border-green-500 dark:border-white"
            >
              <Plus size={20} className="text-dark" />
              Adicionar Aluno
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
              <Dialog.Content className="absolute p-10 bg-zinc-200 rounded-2xl w-full max-w-md  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-white dark:bg-gray-800">
                <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200">
                  <X size={24} aria-label="Fechar" />
                </Dialog.Close>
                <Dialog.Title className="text-3xl leading-tight font-extrabold dark:text-white">
                  Adicionar Aluno
                </Dialog.Title>
                <FormCreateDiscente />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        {attributes.length > 0 ? (
          <table className="w-full">
            <thead className="bg-green-500 text-white dark:bg-green-800">
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Data de Nascimento</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {attributes.map(({ id, nome, email, data_nascimento }) => {
                return (
                  <tr key={id} className="text-center border">
                    <td className="border">
                      <a href={`/admin/discente/${id}`}>{nome}</a>
                    </td>
                    <td className="border">{email}</td>
                    <td className="border">
                      {dayjs(data_nascimento).format("DD/MM/YYYY")}
                    </td>
                    <td className="flex gap-2 justify-center items-center py-1 text-white">
                      <button className="px-2 py-1 rounded-md bg-blue-600 hover:bg-blue-400 transition-colors dark:bg-blue-800 dark:hover:bg-blue-600">
                        Alterar
                      </button>
                      <button
                        onClick={handleDelete}
                        className="px-2 py-1 rounded-md bg-red-600 hover:bg-red-400 transition-colors dark:bg-red-800 dark:hover:bg-red-600"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div>Nada</div>
        )}
      </div>
    </div>
  );
}