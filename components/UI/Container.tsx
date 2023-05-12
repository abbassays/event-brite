import React from "react";

type ContainerProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

const Container = ({
  title,
  description,
  children,
  className,
}: ContainerProps) => {
  return (
    <div className="xl:max-w-7xl md:max-w-5xl sm:max-w-xl max-w-md mx-auto p-4 mt-10">
      <h2 className="text-2xl md:text-3xl font-medium">{title}</h2>
      {description && <p className="text-gray-500 text-base md:text-xl md:mt-2 mb-4">{description}</p>}
      <div className={`grid ${className}`}>{children}</div>
    </div>
  );
};

export default Container;
