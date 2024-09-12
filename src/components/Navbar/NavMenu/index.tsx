import AddPageBtn from './AddPageBtn';
import MenuBtn from './MenuBtn';
import NavIcon from './NavIcon';

type Props = {
  toggleOpen: () => void;
  toggleVisible: () => void;
  toggleHide: () => void;
};

export default function NavMenu({
  toggleOpen,
  toggleVisible,
  toggleHide,
}: Props) {
  return (
    <div className="flex w-[--side-width] min-w-[--side-width] justify-around border-r border-gray-400">
      <NavIcon />
      <MenuBtn
        toggleOpen={toggleOpen}
        toggleVisible={toggleVisible}
        toggleHide={toggleHide}
      />
      <AddPageBtn />
    </div>
  );
}
