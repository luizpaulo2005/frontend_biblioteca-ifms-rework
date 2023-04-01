import { useState } from "react";

export const FormCreateDiscente = () => {
  const [matriculas, setMatriculas] = useState([] | null);

  const [nome, setNome] = useState("");
  const [matricula_id, setMatriculaId] = useState("");
  const [email, setEmail] = useState("");
  const [data_nascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  const handleInputNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleInputMatriculaChange = (e) => {
    setMatriculaId(e.target.value);
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

  const data = { nome, matricula_id, email, data_nascimento, cpf };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api
      .post("/discente", data)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        toast.error("Erro ao criar discente!");
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
            htmlFor="matricula"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Matricula
          </label>
          <input
            type="text"
            id="matricula"
            value={matricula_id}
            list="matriculas"
            onChange={handleInputMatriculaChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
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
        <datalist id="matriculas">
          {matriculas.map(({ id }) => {
            return (
              <option value={id} key={id}>
                {id}
              </option>
            );
          })}
        </datalist>
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
