import Link from "next/dist/client/link";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <h1>Hello, from index page</h1>
      <Link href="/abc/hello">Go to hello page</Link>


    </div>

  );
}
