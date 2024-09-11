type Props = {
  children: React.ReactNode;
};

export default function HoverContainer({ children }: Props) {
  return <div className="hover:scale-125">{children}</div>;
}
