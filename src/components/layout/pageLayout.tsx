interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="flex-1 flex flex-col h-full ">
      {title && (
        <div className="text-2xl text-text-500 font-semibold mt-5 mb-2">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
