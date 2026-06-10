import Link from "next/link";
import { Header } from "./theme/Header";

export function NavBar() {
  return (
    <nav>
      <Link href={'/'} className="text-sm font-semibold">Home</Link>
      <Link href={'/dashboard'} className="text-sm font-semibold">Dashboard</Link>
      <Header />
    </nav>
  )
}