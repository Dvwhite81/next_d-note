import { transitionClass } from '@/utils/constants';
import { SidebarStateType } from '@/utils/types';

type Props = {
  sidebarState: SidebarStateType;
  children: React.ReactNode;
};

export default function PageContainer({ sidebarState, children }: Props) {
  const leftMargin = sidebarState === 'open' ? 'ml-[--side-width]' : '';

  return (
    <div
      className={`h-[--main-height] w-full ${leftMargin} ${transitionClass} bg-[--bg-light]`}
    >
      {children}
    </div>
  );
}
