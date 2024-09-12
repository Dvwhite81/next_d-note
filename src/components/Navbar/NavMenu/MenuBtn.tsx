import Image from 'next/image';
import HoverContainer from '@/components/containers/HoverContainer';
import WhiteMenuIcon from '@/images/white-menu-icon.png';

type Props = {
  toggleOpen: () => void;
  toggleVisible: () => void;
  toggleHide: () => void;
};

export default function MenuBtn({ toggleOpen, toggleVisible, toggleHide }: Props) {
  return (
    <HoverContainer>
      <button
        type="button"
        onClick={toggleOpen}
        onMouseEnter={toggleVisible}
        onMouseLeave={toggleHide}
        className="flex h-[5vh] w-[5vh]"
      >
        <Image src={WhiteMenuIcon} alt="menu button" />
      </button>
    </HoverContainer>
  );
}
