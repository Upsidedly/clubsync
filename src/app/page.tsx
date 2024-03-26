import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-stone-900 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <Image height={0} width={0} className="animate-pulse spin-2 h-16 w-16"  alt="logo" src="/icon.svg" />
      </div>
    </main>
  );
}
