interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 ${hover ? "transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
