import { PageType } from '@/utils/types';
import PageItem from './PageItem';

type Props = {
  allPages: PageType[];
  currentPages: PageType[];
  openPage: (page: PageType) => void;
  closePage: (page: PageType) => void;
  deletePage: (page: PageType) => void;
};

export default function AllPagesList({
  allPages,
  currentPages,
  openPage,
  closePage,
  deletePage,
}: Props) {
  return (
    <div className="flex flex-col">
      {allPages.map((page) => (
        <PageItem
          key={page.id}
          page={page}
          currentPages={currentPages}
          openPage={openPage}
          closePage={closePage}
          deletePage={deletePage}
        />
      ))}
    </div>
  );
}
