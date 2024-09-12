import { PageType } from '@/utils/types';

type Props = {
  page: PageType;
  closeOpenPage: (page: PageType) => void;
};

export default function PageTab({ page, closeOpenPage }: Props) {
  const { title } = page;

  const abbrevTitle =
    title.length > 15 ? title.substring(0, 15) + '...' : title;

  return (
    <div
      className={`group relative flex h-[--nav-height] w-1/3 items-center justify-center p-4 border-r border-gray-300 text-gray-500 hover:cursor-pointer hover:bg-gray-500 hover:text-white`}
    >
      <span>{abbrevTitle}</span>
      <button
        type="button"
        onClick={() => closeOpenPage(page)}
        className="absolute right-1 -top-1 text-white hidden group-hover:flex hover:scale-125"
      >
        x
      </button>
    </div>
  );
}
