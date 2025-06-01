import { cn } from "@/lib/utils";

export function Spinner({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-4 border-primary-500 border-t-primary-50",
        className
      )}
      {...props}
    />
  );
}
