import Link from "next/link";

const CustomButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link href={link} target="_blank">
      <button className="bg-gray-700 hover:bg-green-900 text-white hover:text-gray-700 base-bold rounded-lg w-full p-3 transition duration-400 ease-in-out cursor-pointer">
        {text}
      </button>
    </Link>
  );
};

export default CustomButton;
