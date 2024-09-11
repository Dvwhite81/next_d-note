import Image from 'next/image';
import Link from 'next/link';

import AbsoluteContainer from '../containers/AbsoluteContainer';
import HoverContainer from '../containers/HoverContainer';
import WhiteLogo from '@/images/white-notes-logo.png';

export default function NavLogo() {
  return (
    <AbsoluteContainer>
      <HoverContainer>
        <Link href={'/'} className="flex h-[8vh] w-[30vh]">
          <Image src={WhiteLogo} alt="d-note" />
        </Link>
      </HoverContainer>
    </AbsoluteContainer>
  );
}
