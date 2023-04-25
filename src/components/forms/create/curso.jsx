import { useState } from "react";
import { api } from "../../../lib/axios";
import { toast } from "react-toastify";

export const FormCreateCurso = () => {
  const [campus, setCampus] = useState([] | null);

  const [nome, setNome] = useState("");
  const [grade, setGrade] = useState("");
  const [duracao, setDuracao] = useState("");
  const [campus_id, setCampusId] = useState("");

  const handleInputNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleInputGradeChange = (e) => {
    setGrade(e.target.value);
  };

  const handleInputDuracaoChange = (e) => {
    setDuracao(e.target.value);
  };

  const handleInputCampusChange = (e) => {
    setCampusId(e.target.value);
  };

  const data = { nome, grade, duracao, campus_id };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api
      .post("/curso", data)
      .then((res) => {
        window.location.reload();
      })
      .catch(() => {
        toast.error("Erro ao criar curso!");
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
            htmlFor="grade"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Grade
          </label>
          <input
            type="number"
            id="grade"
            value={grade}
            onChange={handleInputGradeChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="duracao"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Duração
          </label>
          <input
            type="text"
            id="duracao"
            value={duracao}
            onChange={handleInputDuracaoChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="campus_id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Campus
          </label>
          <input
            type="text"
            id="campus_id"
            list="campus_list"
            value={campus_id}
            onChange={handleInputCampusChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <datalist id="campus_list">
          {campus.map(({ id, nome }) => {
            return (
              <option key={id} value={id}>
                {nome}
              </option>
            );
          })}
        </datalist>
        <button
          onClick={handleSubmit}
          className="p-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white transition-colors dark:bg-gray-700 dark:hover:bg-gray-500"
        >
          Cadastrar
        </button>
      </fieldset>
    </form>
  );
};
