import { PageType, SidebarStateType } from '@/utils/types';
import HoverSidebar from './HoverSidebar';
import OpenSidebar from './OpenSidebar';
import AllPagesList from './AllPagesList';

type Props = {
  allPages: PageType[];
  setAllPages: (pages: PageType[]) => void;
  currentPages: PageType[];
  setCurrentPages: (pages: PageType[]) => void;
  sidebarState: SidebarStateType;
  setSidebarState: (state: SidebarStateType) => void;
};

export default function Sidebar({
  allPages,
  setAllPages,
  currentPages,
  setCurrentPages,
  sidebarState,
  setSidebarState,
}: Props) {
  const openPage = (page: PageType) => {
    setCurrentPages([...currentPages, page]);
  };

  const closePage = (page: PageType) => {
    setCurrentPages(currentPages.filter((p) => p !== page));
  };

  const deletePage = (page: PageType) => {
    setAllPages(allPages.filter((p) => p !== page));
  };

  return (
    <>
      <OpenSidebar sidebarState={sidebarState}>
        <AllPagesList
          allPages={allPages}
          currentPages={currentPages}
          openPage={openPage}
          closePage={closePage}
          deletePage={deletePage}
        />
      </OpenSidebar>
      <HoverSidebar
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
      >
        <AllPagesList
          allPages={allPages}
          currentPages={currentPages}
          openPage={openPage}
          closePage={closePage}
          deletePage={deletePage}
        />
      </HoverSidebar>
    </>
  );
}
