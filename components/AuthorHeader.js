import Image from "next/image";

export default function AuthorHeader() {
  return (
    <header className="bg-neutral-900 py-16 text-center rounded-xl mt-8">
      <div className="mx-auto w-fit">
        <Image src="/sample-author.jpg" alt="Author" width={120} height={120} className="rounded-full" />
      </div>
      <h1 className="text-3xl font-extrabold mt-4">Author's Name</h1>
      <p className="text-neutral-400">Founder & Visionary</p>
    </header>
  );
}
