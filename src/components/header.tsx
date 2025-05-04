import GoogleSignInButton from "@/components/google-sign-in-button";
import { auth } from "@/auth";
import SignOutButton from "./sign-out-button";
import { GiShuttlecock } from "react-icons/gi";
import Link from "next/link";
export default async function Header() {
  const userData = await auth();
  console.log(userData);

  return (
    <header className="fixed flex w-full justify-between py-2 mx-auto z-10 bg-green-100 px-2">
      <nav>
        <ul className="flex gap-10">
          <li>
            <Link href="/">
              <div className="flex gap-0,5">
                <GiShuttlecock size={32} />
                <p className="font-bold flex">PLAYMINTON</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
          <li>
            <Link href="/categories">CATEGORIES</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>

      {userData?.user ? (
        <div>
          <p>{userData?.user.name}</p>
          <SignOutButton />
        </div>
      ) : (
        <GoogleSignInButton />
      )}
    </header>
  );
}
