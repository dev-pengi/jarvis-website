import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="w-full h-full max-w-[1200px] mx-auto px-5">{children}</div>;
};

export default Container;
