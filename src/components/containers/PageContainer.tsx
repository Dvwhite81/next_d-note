type Props = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: Props) {
  return <div className="h-[90vh] bg-[--bg-light]">{children}</div>;
}
