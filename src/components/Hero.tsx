import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div
      className="flex items-center flex-col justify-center p-[1rem] md:p-[4rem] w-screen h-screen"
    >
      <div className="drop-shadow-2xl font-bold text-[40px] leading-[101%] text-center">
        <img
          src="/assets/images/logo.png"
          className="mb-4 text-primary text-[5rem]" 
        />
        
        <h1 className="text-white text-[20px]">
          CA: 68ZkdU3CvcACZsedZ23sAUdLQ9Yzib2zF4X3Yu5cpump
        </h1>
      </div>

      <div className="mt-[4rem] flex flex-col md:flex-row items-center gap-2">
        <Link to="https://t.me/OfficialFlub" className="cursor-pointer rounded-full p-2 px-8 text-white bg-primary flex gap-2 items-center">
          <img 
            src="/assets/icons/telegram.svg"
            alt="telegram"
            className="w-[2rem] h-[2rem] invert-white"
          />
          <>Go To Telegram</>
        </Link>

        <Link to="https://x.com/IamFlub" className="cursor-pointer rounded-full p-2 px-8 text-white bg-primary flex gap-2 items-center">
          <img 
            src="/assets/icons/x.svg"
            alt="telegram"
            className="w-[2rem] h-[2rem] invert-white"
          />
          <>Go To X</>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
