export const CardIndex = (props) => {
  return (
    <div
      key={props.id}
      className="w-56 h-36 border rounded-md pt-2 pl-2 pr-2 flex flex-col dark:text-white dark:bg-gray-800"
    >
      <div className="h-3/4 text-center flex flex-col justify-center">
        {props.titulo}
      </div>
      <a
        href={`/user/pesquisa/${props.id}`}
        className="relative left-28 bg-blue-600 rounded-md text-white text-center mb-2 w-24 p-2 transition-colors hover:bg-blue-800"
      >
        Ver Mais
      </a>
    </div>
  );
};
