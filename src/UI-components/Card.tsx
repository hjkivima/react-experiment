import "./Card.scss";

type Props = { children: React.ReactNode };

export function Card({ children }: Props) {
  return <div className="card">{children}</div>;
}
