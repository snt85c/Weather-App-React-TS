import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <>
    <div className="absolute bottom-0 flex px-2 text-white text-[0.7rem] md:text-sm w-full opacity-50 bg-gray-800 justify-between items-center">
      <div className="flex  md:text-sm">Snt (2022)</div>
      <a href="https://github.com/snt85c">
      <FaGithub />
      </a>
    </div>
    </>
  );
}
