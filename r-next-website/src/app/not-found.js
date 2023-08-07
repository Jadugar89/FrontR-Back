import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container pt-32 max-w-7xl mx-auto text-center flex flex-col gap-6 items-center'">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="text-blue-600" href="/">
        Return Home
      </Link>
    </div>
  );
}
