import { useState } from "react";
import api from "../../../lib/axios";
import { toast } from "react-toastify";

export const FormCreateMatricula = () => {
  const [cursos, setCursos] = useState([]);

  const [id, setId] = useState("");
  const [data_inicio, setDataInicio] = useState("");
  const [curso_id, setCursoId] = useState("");

  const handleInputIDChange = (e) => {
    setId(e.target.value);
  };

  const handleInputDataChange = (e) => {
    setDataInicio(e.target.value);
  };

  const handleInputCursoChange = (e) => {
    setCursoId(e.target.value);
  };

  const data = { id, data_inicio, curso_id };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api
      .post("/matricula", data)
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
            htmlFor="id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Número da Matricula
          </label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={handleInputIDChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="data_inicio"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Data de Início
          </label>
          <input
            type="date"
            id="data_inicio"
            value={data_inicio}
            onChange={handleInputDataChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="curso_id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Curso
          </label>
          <input
            type="text"
            list="cursos"
            id="curso_id"
            value={curso_id}
            onChange={handleInputCursoChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <datalist id="cursos">
          {cursos?.map(({ id, nome }) => {
            return (
              <option key={id} value={id}>
                {nome}
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
