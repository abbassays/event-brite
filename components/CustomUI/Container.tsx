import React from "react";

type ContainerProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  gridHeaders?: React.ReactNode;
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
  gridHeaders,
}: ContainerProps) => {
  return (
    <div className="xl:max-w-7xl md:max-w-5xl sm:max-w-xl max-w-md mx-auto mt-10 px-4 w-full">
      {(title || actionButton) && (
        <div className="flex justify-between mb-4">
          {title && (
            <h2 className="text-2xl md:text-3xl font-medium ">{title}</h2>
          )}
          {actionButton ? actionButton : null}
        </div>
      )}
      {description && (
        <p className="text-gray-500 text-base md:text-xl md:mt-2">
          {description}
        </p>
      )}
      {gridHeaders && <div className={`mt-4`}>{gridHeaders}</div>}
      {gridItems && <div className={`grid ${className} mt-4`}>{gridItems}</div>}
      {children}
    </div>
  );
};

export default Container;
