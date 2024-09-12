import { PageType } from '@/utils/types';
import HoverContainer from '../containers/HoverContainer';
import ItemDropdown from './ItemDropdown';
import { useState } from 'react';
import TriggerDropdown from './TriggerDropdown';

type Props = {
  page: PageType;
  currentPages: PageType[];
  openPage: (page: PageType) => void;
  closePage: (page: PageType) => void;
  deletePage: (page: PageType) => void;
};

export default function PageItem({
  page,
  currentPages,
  openPage,
  closePage,
  deletePage,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const pageIsOpen = currentPages.includes(page);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-2">
        <HoverContainer>
          <TriggerDropdown isOpen={isOpen} setIsOpen={setIsOpen} />
        </HoverContainer>
        <HoverContainer>
          <button type="button" onClick={() => openPage(page)}>
            {page.title}
          </button>
        </HoverContainer>
        {pageIsOpen && (
          <HoverContainer>
            <button type="button" onClick={() => closePage(page)}>
              x
            </button>
          </HoverContainer>
        )}
      </div>
      <ItemDropdown
        page={page}
        deletePage={deletePage}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
