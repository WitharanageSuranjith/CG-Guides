import Link from "next/link";

export default function PathCard({ href }: { href: string }) {
  return (
    <Link href={href} className="w-full">
      <div className="bg-[#000] w-full h-[270px] rounded-[15px] flex flex-col justify-between overflow-hidden">
     
      </div>
    </Link>
  );
}