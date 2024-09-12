'use client';
import { PageType } from '@/utils/types';

type Props = {
  page: PageType;
  deletePage: (page: PageType) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function ItemDropdown({
  page,
  deletePage,
  isOpen,
  setIsOpen,
}: Props) {
  const displayClass = isOpen ? '' : 'hidden';

  return (
    <div className={`relative h-full w-full mb-8 ${displayClass}`}>
      <div
        className="absolute bottom-0 right-0"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ul>
          <li>
            <button type="button" onClick={() => deletePage(page)}>
              delete page
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
