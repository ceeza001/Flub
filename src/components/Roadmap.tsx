import { roadmaps } from "@/constants"

const Roadmap = () => {
  return (
    <div className="w-full p-[1rem] md:px-[4rem] pointer-events-none">
      <div className="text-center w-full">
        <h1 className="text-white font-bold text-[60px] md:text-[50px]">
          How to buy
        </h1>
      </div>
      <div className="mt-8 mx-auto md:max-w-[50rem] flex gap-4 flex-wrap justify-around items-start">
        {roadmaps.map((roadmap, i) => (
          <div 
            key={i} 
            className="text-center w-full md:max-w-[38rem] min-h-[20rem] black-glassmorphism border border-[#1F1F22] rounded-lg p-4">
            <h2 className="text-[30px] font-bold text-[#6AC974]">{roadmap.title}</h2>

            <p className="text-[14px] mt-4 space-y-4">
              {roadmap.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
