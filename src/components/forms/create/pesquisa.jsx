import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { toast } from "react-toastify";

export const FormCreatePesquisa = () => {
  const [cursos, setCursos] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [data_apresentacao, setDataApresentacao] = useState("");
  const [resumo, setResumo] = useState("");
  const [palavras_chave, setPalavrasChave] = useState("");
  const [curso_id, setCursoId] = useState("");
  const [pdfFile, setPdfFile] = useState();

  const handleInputTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleInputDataChange = (e) => {
    setDataApresentacao(e.target.value);
  };

  const handleInputResumoChange = (e) => {
    setResumo(e.target.value);
  };

  const handleInputPalavrasChaveChange = (e) => {
    setPalavrasChave(e.target.value);
  };

  const handleInputCursoChange = (e) => {
    setCursoId(e.target.value);
  };

  const handleInputFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const FormPesquisa = new FormData();

  FormPesquisa.append("titulo", titulo);
  FormPesquisa.append("data_apresentacao", data_apresentacao);
  FormPesquisa.append("resumo", resumo);
  FormPesquisa.append("palavras_chave", palavras_chave);
  FormPesquisa.append("curso_id", curso_id);
  FormPesquisa.append("pdfFile", pdfFile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api
      .post("/pesquisa", FormPesquisa, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        toast.error("Erro ao criar pesquisa!");
      });
  };

  useEffect(()=>{
    api.get("/cursos/all").then((res)=>{
      setCursos(res.data);
    })
  })

  return (
    <form>
      <fieldset className="p-3">
        <div className="mb-6">
          <label
            htmlFor="titulo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Título
          </label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={handleInputTituloChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="data_apresentacao"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Título
          </label>
          <input
            type="date"
            id="data_apresentacao"
            value={data_apresentacao}
            onChange={handleInputDataChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="resumo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Resumo
          </label>
          <input
            type="text"
            id="resumo"
            value={resumo}
            onChange={handleInputResumoChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="palavras_chave"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Palavras-Chave
          </label>
          <input
            type="text"
            id="palavras_chave"
            value={palavras_chave}
            onChange={handleInputPalavrasChaveChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="curso_id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ID do Curso
          </label>
          <input
            type="text"
            id="curso_id"
            list="cursos"
            value={curso_id}
            onChange={handleInputCursoChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
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
        <div className="mb-6">
          <label
            htmlFor="pdfFile"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Arquivo PDF
          </label>
          <input
            type="file"
            id="pdfFile"
            onChange={handleInputFileChange}
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
