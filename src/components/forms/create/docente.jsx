import { useState } from "react";
import { api } from "../../../lib/axios";
import { toast } from "react-toastify";

export const FormCreateDocente = () => {
  const [nome, setNome] = useState("");
  const [siape, setSiape] = useState("");
  const [email, setEmail] = useState("");
  const [data_nascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [formacao, setFormacao] = useState("");

  const handleInputNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleInputSiapeChange = (e) => {
    setSiape(e.target.value);
  };

  const handleInputEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInputDataNascimentoChange = (e) => {
    setDataNascimento(e.target.value);
  };

  const handleInputCpfChange = (e) => {
    setCpf(e.target.value);
  };

  const handleInputFormacaoChange = (e) => {
    setFormacao(e.target.value);
  };

  const data = { nome, siape, email, data_nascimento, cpf, formacao };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api
      .post("/docente", data)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        toast.error("Erro ao criar docente!");
      });
  };

  return (
    <form>
      <fieldset className="p-3">
        <div className="mb-6">
          <label
            htmlFor="nome"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nome
          </label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={handleInputNomeChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="siape"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            SIAPE
          </label>
          <input
            type="text"
            id="siape"
            value={siape}
            onChange={handleInputSiapeChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleInputEmailChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="data_nascimento"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Data de Nascimento
          </label>
          <input
            type="date"
            id="data_nascimento"
            value={data_nascimento}
            onChange={handleInputDataNascimentoChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="cpf"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            CPF
          </label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={handleInputCpfChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="formacao"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Formação
          </label>
          <input
            type="text"
            id="formacao"
            value={formacao}
            onChange={handleInputFormacaoChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          className="p-2 rounded-md bg-blue-600 text-white dark:bg-gray-700"
        >
          Cadastrar
        </button>
      </fieldset>
    </form>
  );
};
