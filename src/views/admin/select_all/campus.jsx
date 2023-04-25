import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { Helmet } from "react-helmet";
import { Header } from "../../../components/header/header";
import { toast } from "react-toastify";
import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { FormCreateCampus } from "../../../components/forms/create/campus";

export const ASelectCampusAll = () => {
  const [attributes, setAttributes] = useState([] | null);

  const handleDelete = async (e) => {
    const { id } = e.target;
    await api
      .get(`/campus/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api
      .get("/campus/all")
      .then((res) => {
        setAttributes(res.data);
        toast.success("Dados carregados com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-screen min-h-screen p-2 dark:text-white">
      <Helmet>
        <title>Admin - Lista de Campus</title>
      </Helmet>
      <Header />
      <div>
        <div className="flex justify-between p-3">
          <div className="text-2xl">Lista de Campus</div>
          <div>
            <Dialog.Root>
              <Dialog.Trigger
                type="button"
                className="flex items-center border border-black p-2 rounded-md gap-2 transition-colors hover:border-green-500 dark:border-white"
              >
                <Plus size={20} className="text-dark" />
                Adicionar Campus
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
                <Dialog.Content className="absolute p-10 bg-zinc-200 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-white dark:bg-gray-800">
                  <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200">
                    <X size={24} />
                  </Dialog.Close>
                  <Dialog.Title className="text-3xl leading-tight font-extrabold dark:text-white">
                    Adicionar Campus
                  </Dialog.Title>
                  <FormCreateCampus />
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>

        <div>
          {attributes ? (
            <table className="w-full">
              <thead className="bg-green-500 text-white dark:bg-green-700">
                <tr>
                  <th>Nome</th>
                  <th>Cidade</th>
                  <th>Estado</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {attributes.map(({ id, nome, cidade, estado }) => (
                  <tr key={id} className="text-center border">
                    <td className="border">
                      <a href={`/admin/campus/${id}`}>{nome}</a>
                    </td>
                    <td className="border">{cidade}</td>
                    <td className="border">{estado}</td>
                    <td className="flex gap-2 justify-center text-white">
                      <button className="p-2 rounded-md bg-blue-600 hover:bg-blue-400 transition-colors dark:bg-blue-800 dark:hover:bg-blue-600">
                        Alterar
                      </button>
                      <button
                        id={id}
                        onClick={handleDelete}
                        className="p-2 rounded-md bg-red-600 hover:bg-red-400 transition-colors dark:bg-red-800 dark:hover:bg-red-600"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="w-full text-center">
              <div className="text-2xl">Sem campus</div>
              <div>Atualize a página ou contate o suporte</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
