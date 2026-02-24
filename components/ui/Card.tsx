type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-[0px_8px_30px_rgba(41,79,124,0.08)] ${className}`}
    >
      {children}
    </div>
  );
}
