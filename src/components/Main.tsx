'use client';

import { useState } from 'react';
import { PageType, SidebarStateType } from '@/utils/types';
import Navbar from './Navbar';
import PageContainer from './containers/PageContainer';
import Sidebar from './Sidebar';
import { PAGES } from '@/utils/data';

type Props = {
  children: React.ReactNode;
};

export default function Main({ children }: Props) {
  const [sidebarState, setSidebarState] = useState<SidebarStateType>('closed');
  const [allPages, setAllPages] = useState<PageType[]>(PAGES);
  const [currentPages, setCurrentPages] = useState<PageType[]>([]);

  return (
    <>
      <Navbar
        currentPages={currentPages}
        setCurrentPages={setCurrentPages}
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
      />
      <div className="relative flex">
        <Sidebar
          allPages={allPages}
          setAllPages={setAllPages}
          currentPages={currentPages}
          setCurrentPages={setCurrentPages}
          sidebarState={sidebarState}
          setSidebarState={setSidebarState}
        />
        <PageContainer sidebarState={sidebarState}>{children}</PageContainer>
      </div>
    </>
  );
}
