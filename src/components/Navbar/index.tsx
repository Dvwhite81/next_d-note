'use client';
import { PageType, SidebarStateType } from '@/utils/types';
import NavMenu from './NavMenu';
import NavTabs from './NavTabs';

type Props = {
  currentPages: PageType[];
  setCurrentPages: (pages: PageType[]) => void;
  sidebarState: SidebarStateType;
  setSidebarState: (state: SidebarStateType) => void;
};
export default function Navbar({
  currentPages,
  setCurrentPages,
  sidebarState,
  setSidebarState,
}: Props) {
  const toggleOpen = () => {
    if (sidebarState === 'open') setSidebarState('closed');
    else setSidebarState('open');
  };

  const toggleVisible = () => {
    if (sidebarState === 'open') return;
    else if (sidebarState === 'hover') setSidebarState('closed');
    else if (sidebarState === 'closed') setSidebarState('hover');
  };

  const toggleHide = () => {
    if (sidebarState === 'hover') setSidebarState('closed');
  };

  return (
    <nav className="flex h-[--nav-height] items-center bg-[--bg-dark] text-white font-bold">
      <NavMenu
        toggleOpen={toggleOpen}
        toggleVisible={toggleVisible}
        toggleHide={toggleHide}
      />
      <NavTabs currentPages={currentPages} setCurrentPages={setCurrentPages} />
    </nav>
  );
}
