import { Link } from "react-router-dom"
import { navbarLinks } from "@/constants"

const Anticipate = () => {
  return (
    <div className="p-[1rem] md:p-[4rem] w-full bg-[#29262D]">
      <div className="text-white w-full text-center space-y-2">
        <h1 className="font-bold text-[60px] text-[#6AC974] md:text-[4rem] leading-[101%]">
          I am FLUB
        </h1>
      </div>
      
      <div className="mt-8 mx-auto max-w-[35rem] w-full text-center pointer-events-none">
        <p>
          Hi my name is Flub and I like too kick back and enjoy life. I don’t really give a damn what most people think about me as I continue on with life regardless. I’m from the planet Fluuuborian and it’s like the money capital in our Galaxy I guess you could say. I call it the money capital because it’s where all the business goes down from your ethical line of work to the shady I know a guy that can handle that. I’ve done my research and I guess I’m going to launch myself on the Solana Blockchain. I’m shooting an animated series and you will get to see what my life is like on Fluuuborian.Fluuuub!! Fluub! FLuuuuuuuuub! Fluuub!
        </p>
      </div>

      <div className="my-8 mx-auto max-w-[35rem] flex flex-wrap gap-2">
        {navbarLinks.map((item, i) => (
          <Link key={i} to={item.route} className="flex gap-2 p-2 justify-center items-center min-w-fit max-w-fit text-center rounded-full border border-[#AD9DDB]">
            <p className="text-[#AD9DDB] text-center font-inter">{item.label}</p>
            
            <img 
              src="/assets/icons/angle-right.svg"
              width={30}
              height={30}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Anticipate;