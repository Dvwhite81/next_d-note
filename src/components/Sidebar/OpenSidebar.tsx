import { transitionClass } from '@/utils/constants';
import { SidebarStateType } from '@/utils/types';

type Props = {
  sidebarState: SidebarStateType;
  children: React.ReactNode;
};

export default function OpenSidebar({ sidebarState, children }: Props) {
  const leftPos = sidebarState === 'open' ? 'left-0' : '-left-[30vw]';

  return (
    <nav
      className={`absolute flex flex-col ${leftPos} ${transitionClass} w-[--side-width] min-w-[--side-width] h-[--main-height] bg-gray-500`}
    >
      <h2 className="text-2xl text-white">Sidebar</h2>
      {children}
    </nav>
  );
}
