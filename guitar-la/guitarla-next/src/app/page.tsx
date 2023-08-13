import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello world in next</h1>
      <Link href="/about-us">About us</Link>
    </>
  );
}
