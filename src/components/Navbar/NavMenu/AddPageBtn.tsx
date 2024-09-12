import Image from 'next/image';
import HoverContainer from '@/components/containers/HoverContainer';
import WhiteAddIcon from '@/images/white-add-icon.png';

export default function AddPageBtn() {
  return (
    <HoverContainer>
      <button type="button" onClick={() => {}} className="flex h-[5vh] w-[5vh]">
        <Image src={WhiteAddIcon} alt="add page button" />
      </button>
    </HoverContainer>
  );
}
