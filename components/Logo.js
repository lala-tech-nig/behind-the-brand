import Image from "next/image";

export default function Logo({ mode = "light", size = 36 }) {
  const src = mode === "dark" ? "/btblogo.png" : "/btblogo.png";
  return <Image src={src} width={size} height={size} alt="Behind The Brand" />;
}
