import React from "react";

type ContainerProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  gridItems?: React.ReactNode;
  actionButton?: React.ReactNode;
};

const Container = ({
  title,
  description,
  children,
  className,
  gridItems,
  actionButton,
}: ContainerProps) => {
  return (
    <div className="xl:max-w-7xl md:max-w-5xl sm:max-w-xl max-w-md mx-auto mt-10 px-4 w-full">
      <div className="flex justify-between">
        {title && (
          <h2 className="text-2xl md:text-3xl font-medium ">{title}</h2>
        )}
        {actionButton ? actionButton : null}
      </div>
      {description && (
        <p className="text-gray-500 text-base md:text-xl md:mt-2">
          {description}
        </p>
      )}
      <div className={`grid ${className} mt-4`}>{gridItems}</div>
      {children}
    </div>
  );
};

export default Container;
