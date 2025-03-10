import Image from "next/image";

import CustomButton from "./components/customButton";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center overflow-x-hidden bg-gray-900">
      <main className="flex justify-center">
        <article className="bg-gray-800 w-[327px] sm:w-[384px] h-[579px] sm:h-[611px] rounded-xl p-10 flex-center flex-col gap-y-6">
          <Image src="/images/avatar-jessica.jpeg" width={88} height={88} alt="Avatar image" className="rounded-full" />
          <div>
            <h1 className="title text-white">Jessica Randall</h1>
            <p className="base-bold text-green-900">London, United Kingdom</p>
          </div>
          <p className="base text-white">&quot;Front-end developer and avid reader.&quot;</p>
          <div className="flex flex-col gap-4 w-full">
            <CustomButton text="GitHub" link="https://github.com/" />
            <CustomButton text="Frontend Mentor" link="https://www.frontendmentor.io" />
            <CustomButton text="LinkedIn" link="https://www.linkedin.com/" />
            <CustomButton text="Twitter" link="https://x.com/" />
            <CustomButton text="Instagram" link="https://www.instagram.com/" />
          </div>
        </article>
      </main>
    </div>
  );
}
