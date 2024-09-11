type Props = {
  children: React.ReactNode;
};

export default function AbsoluteContainer({ children }: Props) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>
  );
}
