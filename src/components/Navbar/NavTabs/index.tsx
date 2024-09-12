import PageTab from './PageTab';
import { PageType } from '@/utils/types';

type Props = {
  currentPages: PageType[];
  setCurrentPages: (currentPages: PageType[]) => void;
};

export default function NavTabs({ currentPages, setCurrentPages }: Props) {
  const closeOpenPage = (page: PageType) => {
    setCurrentPages(currentPages.filter((p) => p !== page));
  };

  return (
    <div className="flex w-[--main-width]">
      {currentPages.map((page) => (
        <PageTab key={page.id} page={page} closeOpenPage={closeOpenPage} />
      ))}
    </div>
  );
}
