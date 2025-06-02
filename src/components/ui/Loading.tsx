import { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="flex items-center justify-center h-40">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
    </div>
  );
};
export default Loading;
