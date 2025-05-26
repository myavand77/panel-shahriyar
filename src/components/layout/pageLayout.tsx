interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="flex-1 flex flex-col h-full ">
      {title && (
        <div className="text-lg text-text-500 font-bold mb-3">{title}</div>
      )}
      {children}
    </div>
  );
}
