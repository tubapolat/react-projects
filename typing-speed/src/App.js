import { Main } from "./components/Main";

export const App = () => {
  return (
    <div className=" relative w-full h-screen bg-bodyDefault bg-cover bg-no-repeat">
      <div className="w-full h-full sm:container flex items-center justify-center mx-auto">
        <Main />
      </div>
    </div>
  );
};
