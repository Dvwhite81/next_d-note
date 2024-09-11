'use client';
import Link from 'next/link';
import { SignedIn, SignedOut, SignOutButton, UserButton } from '@clerk/nextjs';
import HoverContainer from '@/components/containers/HoverContainer';
import NavLogo from './NavLogo';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  console.log('pathname:', pathname);
  return (
    <nav className="relative flex h-[10vh] items-center justify-between p-4 bg-[--bg-dark] text-white font-bold">
      <SignedIn>
        <HoverContainer>
          {pathname === '/profile' ? (
            <UserButton />
          ) : (
            <Link href={'/profile'}>Profile</Link>
          )}
        </HoverContainer>
        <HoverContainer>
          <SignOutButton />
        </HoverContainer>
      </SignedIn>

      <NavLogo />

      <SignedOut>
        <HoverContainer>
          <Link href="sign-up">Register</Link>
        </HoverContainer>
        <HoverContainer>
          <Link href="sign-in">Log In</Link>
        </HoverContainer>
      </SignedOut>
    </nav>
  );
}
