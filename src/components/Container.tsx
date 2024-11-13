import { ReactNode } from "react";

// Define prop types
interface CardProps {
  children: ReactNode;
  fluid?: boolean;
}

const Container = ({ children, fluid = false }: CardProps) => {
  return (
    <div className={`container mx-auto max-w-7xlxl py-6 px-12 ${fluid ? "" : ""}  rounded-lg  `}>
      {children}
    </div>
  );
};

export default Container;
