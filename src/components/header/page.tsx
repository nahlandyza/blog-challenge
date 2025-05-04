import GoogleSignInButton from "@/components/google-sign-in-button";
import { auth } from "@/auth";
import SignOutButton from "../sign-out-button";
import { GiShuttlecock } from "react-icons/gi";
import Link from "next/link";

export default async function Header() {
  const userData = await auth();

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-green-100 shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 max-w-7xl mx-auto gap-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <GiShuttlecock size={28} />
          <p className="font-bold text-lg">PLAYMINTON</p>
        </Link>

        {/* Nav Links */}
        <nav className="flex flex-wrap gap-7 justify-center font-semibold text-sm md:text-base">
          <Link href="/blog" className="hover:underline">
            BLOG
          </Link>
          <Link href="/categories" className="hover:underline">
            CATEGORIES
          </Link>
          <Link href="/about" className="hover:underline">
            ABOUT
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {userData?.user ? (
            <>
              <p className="text-sm truncate max-w-[100px]">
                {userData.user.name}
              </p>
              <SignOutButton />
            </>
          ) : (
            <GoogleSignInButton />
          )}
        </div>
      </div>
    </header>
  );
}
