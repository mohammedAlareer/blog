import Image from "next/image"

function Logo() {
  return (
    <section className="w-full ">
        <Image className="border-4 border-black dark:border-slate-500 drop-shadow-2xl shadow-xl mt-8 rounded-full mx-auto"
        src="/images/logo.jpg"
        width={200}
        height={200}
        alt="Mohammed Alareer"
        priority={true}
        />
    </section>
  );
}

export default Logo