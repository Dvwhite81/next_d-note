type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function TriggerDropdown({ isOpen, setIsOpen }: Props) {
  const displayClass = isOpen ? 'hidden' : '';

  return (
    <span
      className={`${displayClass}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      o
    </span>
  );
}
