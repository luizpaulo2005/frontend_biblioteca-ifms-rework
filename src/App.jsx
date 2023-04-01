import { useEffect, useState } from "react";
import { HeaderAdmin } from "./components/header/header_admin";
import { CardIndex } from "./components/card/pesquisa_index";
import { api } from "./lib/axios";

export const App = () => {
  const [attributes, setAttributes] = useState([] | null);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      setIsLoading(true);
      api.get("/pesquisas/sumario").then((res) => {
        setAttributes(res.data);
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="w-screen min-h-screen p-2 dark:text-white">
      <HeaderAdmin />
      <div className="border rounded-md mt-4 w-full h-auto p-3 flex flex-wrap gap-2 sm:justify-center md:justify-start">
        {attributes ? (
          attributes.map(({ id, titulo }) => {
            return <CardIndex id={id} titulo={titulo} />;
          })
        ) : (
          <div className="w-full text-center">
            <div className="text-2xl">Sem pesquisas</div>
            <div>Atualize a página ou contate o suporte</div>
          </div>
        )}
      </div>
    </div>
  );
};
