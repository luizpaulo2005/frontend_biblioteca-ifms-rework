import { Helmet } from "react-helmet";
import { api } from "../../../lib/axios";
import { HeaderAdmin } from "../../../components/header/header_admin";
import { FileArrowDown, Plus, X } from "phosphor-react";
import { FormCreatePesquisa } from "../../../components/forms/create/pesquisa";
import * as Dialog from "@radix-ui/react-dialog";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export const ASelectPesquisaAll = () => {
  const [attributes, setAttributes] = useState([]);

  const handleDelete = async (e) => {
    const { id } = e.target;
    await api
      .delete(`/pesquisa/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        toast.error("Erro ao deletar pesquisa!");
      });
  };

  useEffect(() => {
    api
      .get("/pesquisas/all")
      .then((res) => {
        setAttributes(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-screen min-h-screen p-2 dark:text-white">
      <Helmet>
        <title>Admin - Lista de Pesquisas</title>
      </Helmet>
      <HeaderAdmin />
      <div>
        <div className="flex justify-between p-3">
          <div className="text-2xl">Lista de Pesquisas</div>
          <Dialog.Root>
            <Dialog.Trigger
              type="button"
              className="flex items-center border border-black p-2 rounded-md gap-2 transition-colors hover:border-green-500 dark:border-white"
            >
              <Plus size={20} className="text-dark" />
              Adicionar Pesquisa
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
              <Dialog.Content className="absolute p-10 bg-zinc-200 rounded-2xl w-full max-w-md  top-1/2 left-1/2 -translate-x-1/2 -translate-y-[62%] dark:text-white dark:bg-gray-800">
                <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200">
                  <X size={24} aria-label="Fechar" />
                </Dialog.Close>
                <Dialog.Title className="text-3xl leading-tight font-extrabold dark:text-white">
                  Adicionar Pesquisa
                </Dialog.Title>
                <FormCreatePesquisa />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
        {attributes ? (
          <table className="w-full">
            <thead className="bg-green-500 text-white dark:bg-green-800">
              <tr>
                <th>Nome</th>
                <th>Discentes</th>
                <th>Docentes</th>
                <th>Data de Apresentação</th>
                <th>PDF</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {attributes.map(
                ({ id, titulo, discentes, docentes, data_apresentacao }) => {
                  return (
                    <tr key={id} className="text-center border">
                      <td className="border">
                        <a href={`/admin/pesquisa/${id}`}>{titulo}</a>
                      </td>
                      {discentes.length > 0 ? (
                        <td className="border">
                          <a
                            href={`/user/discente/${discentes[0].discente.id}`}
                          >
                            {discentes[0].discente.nome}
                          </a>
                        </td>
                      ) : (
                        <td className="border">Não cadastrado</td>
                      )}
                      {docentes.length > 0 ? (
                        <td className="border">
                          <a href={`/user/docente/${docentes[0].docente.id}`}>
                            {docentes[0].docente.nome}
                          </a>
                        </td>
                      ) : (
                        <td className="border">Não cadastrado</td>
                      )}
                      <td className="border">
                        {dayjs(data_apresentacao).format("DD/MM/YYYY")}
                      </td>
                      <td className="border">
                        <a
                          download
                          href={import.meta.env.VITE_DATA_URL + `/pesquisa/download/${id}`}
                          className="flex justify-center items-center"
                        >
                          <FileArrowDown
                            size={20}
                            className="text-green-400 transition-colors hover:text-blue-700"
                          />
                        </a>
                      </td>
                      <td className="flex justify-center items-center gap-2 py-1 text-white">
                        <button className="px-2 py-1 rounded-md bg-blue-600 hover:bg-blue-400 transition-colors dark:bg-blue-800 dark:hover:bg-blue-600">
                          Alterar
                        </button>
                        <button
                          onClick={handleDelete}
                          id={id}
                          className="px-2 py-1 rounded-md bg-red-600 hover:bg-red-400 transition-colors dark:bg-red-800 dark:hover:bg-red-600"
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        ) : (
          <div>Nada</div>
        )}
      </div>
    </div>
  );
};
