import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { USelectCampusAll } from './views/user/select_all/campus'
import { USelectCursoAll } from './views/user/select_all/curso'
import { USelectDiscenteAll } from './views/user/select_all/discente'
import { USelectDocenteAll } from './views/user/select_all/docente'
import { USelectPesquisaAll } from './views/user/select_all/pesquisa'

import { USelectCampusSolo } from "./views/user/select_solo/campus";
import { USelectCursoSolo } from "./views/user/select_solo/curso";
import { USelectDiscenteSolo } from "./views/user/select_solo/discente";
import { USelectDocenteSolo } from "./views/user/select_solo/docente";
import { USelectPesquisaSolo } from "./views/user/select_solo/pesquisa";

import { ASelectCampusAll } from './views/admin/select_all/campus'
import { ASelectCursoAll } from './views/admin/select_all/curso'
import { ASelectDiscenteAll } from './views/admin/select_all/discente'
import { ASelectDocenteAll } from './views/admin/select_all/docente'
import { ASelectMatriculaAll } from './views/admin/select_all/matricula'
import { ASelectPesquisaAll } from './views/admin/select_all/pesquisa'
import { ASelectCampusSolo } from "./views/admin/select_solo/campus";
import { ASelectCursoSolo } from "./views/admin/select_solo/curso";
import { ASelectDiscenteSolo } from "./views/admin/select_solo/discente";
import { ASelectDocenteSolo } from "./views/admin/select_solo/docente";
import { ASelectPesquisaSolo } from "./views/admin/select_solo/pesquisa";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ToastContainer/>
    <Routes>
      <Route path="/" element={<App />} />
      {/* Rotas User All */}
      <Route path="/campus" element={<USelectCampusAll/>} />
      <Route path="/cursos" element={<USelectCursoAll/>} />
      <Route path="/discentes" element={<USelectDiscenteAll/>} />
      <Route path="/docentes" element={<USelectDocenteAll/>} />
      <Route path="/pesquisas" element={<USelectPesquisaAll/>} />
      {/* Rotas User Solo */}
      <Route path="/campus:id" element={<USelectCampusSolo/>} />
      <Route path="/curso:id" element={<USelectCursoSolo/>} />
      <Route path="/discente:id" element={<USelectDiscenteSolo/>} />
      <Route path="/docente:id" element={<USelectDocenteSolo/>} />
      <Route path="/pesquisa:id" element={<USelectPesquisaSolo/>} />
      {/* Rotas Admin All */}
      <Route path="/admin/campus" element={<ASelectCampusAll/>} />
      <Route path="/admin/cursos" element={<ASelectCursoAll/>} />
      <Route path="/admin/discentes" element={<ASelectDiscenteAll/>} />
      <Route path="/admin/docentes" element={<ASelectDocenteAll/>} />
      <Route path="/admin/matriculas" element={<ASelectMatriculaAll/>} />
      <Route path="/admin/pesquisas" element={<ASelectPesquisaAll/>} />
      {/* Rotas Admin Solo */}
      <Route path="/admin/campus:id" element={<ASelectCampusSolo/>} />
      <Route path="/admin/curso:id" element={<ASelectCursoSolo/>} />
      <Route path="/admin/discente:id" element={<ASelectDiscenteSolo/>} />
      <Route path="/admin/docente:id" element={<ASelectDocenteSolo/>} />
      <Route path="/admin/pesquisa:id" element={<ASelectPesquisaSolo/>} />
    </Routes>
  </BrowserRouter>
);
