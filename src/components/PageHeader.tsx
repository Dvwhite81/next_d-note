type Props = {
  title: string;
};

export default function PageHeader({ title }: Props) {
  return <h1 className="text-3xl font-bold">{title}</h1>;
}
