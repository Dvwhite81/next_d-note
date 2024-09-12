import Image from 'next/image';
import Link from 'next/link';

import HoverContainer from '@/components/containers/HoverContainer';
import WhiteIcon from '@/images/small-white-logo.png';

export default function NavIcon() {
  return (
    <HoverContainer>
      <Link href={'/'} className="flex h-[5vh] w-[5vh]">
        <Image src={WhiteIcon} alt="d-note" />
      </Link>
    </HoverContainer>
  );
}
