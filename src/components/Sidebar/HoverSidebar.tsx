import { transitionClass } from '@/utils/constants';
import { SidebarStateType } from '@/utils/types';

type Props = {
  sidebarState: SidebarStateType;
  setSidebarState: (state: SidebarStateType) => void;
  children: React.ReactNode;
};

export default function HoverSidebar({
  sidebarState,
  setSidebarState,
  children,
}: Props) {
  const leftPos = sidebarState === 'hover' ? 'left-0' : '-left-[30vw]';

  return (
    <div
      onMouseEnter={() => setSidebarState('hover')}
      onMouseLeave={() => setSidebarState('closed')}
      className={`absolute ${leftPos} ${transitionClass} top-1/2 transform -translate-y-1/2 flex flex-col h-[--main-height] w-[--side-width] min-w-[--side-width] bg-transparent`}
    >
      <nav className="h-[--side-hover-height] my-auto bg-gray-500 rounded-r-lg">
        <h2 className="text-2xl text-white">Sidebar</h2>
        {children}
      </nav>
    </div>
  );
}
