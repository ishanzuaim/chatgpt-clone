import Prompts from "../components/Prompts";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div>
        <Prompts />
      </div>
    </div>
  );
};

export default HomePage;
