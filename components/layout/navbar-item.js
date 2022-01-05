import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarItem({ href, children}) {
    const router = useRouter()
    const isActive = router.pathname === href
  return (
    <li>
      <Link href={href}>
        <a className={`hover:underline underline-offset-4 ${isActive ? 'font-bold' : 'font-normal'}`}>
            {children}
        </a>
      </Link>
    </li>
  );
}
