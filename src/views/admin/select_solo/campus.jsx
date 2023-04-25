import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/axios";
import { Helmet } from "react-helmet";
import { Header } from "../../../components/header/header";

export const ASelectCampusSolo = () => {
  const [attributes, setAttributes] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/campus/${id}`)
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
      {attributes ? (
        <Helmet>
          <title>Admin - Campus {attributes.nome}</title>
        </Helmet>
      ) : (
        <></>
      )}
      <Header />
      <div className="p-2">
        <div className="text-3xl mb-2">Campus {attributes?.nome}</div>
        <div className="border rounded-md p-2 dark:bg-gray-700 dark:border-none">
          <div>Cidade: {attributes?.cidade}</div>
          <div>Estado: {attributes?.estado}</div>
          <div>Email: {attributes?.email}</div>
        </div>
        {attributes ? (
          <div className="border mt-2 rounded-md p-2 dark:bg-gray-700 dark:border-none">
            {attributes.cursos.length > 0 ? (
              <div>
                <div className="text-2xl mb-1">
                  Cursos inseridos neste campus: {attributes.cursos.length}
                </div>
                {attributes.cursos.map(({ id, nome }) => {
                  return (
                    <div key={id} className="mb-1">
                      <a href={`/admin/curso/${id}`}>{nome}</a>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>Atualmente esse campus não possui cursos cadastrados</div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
