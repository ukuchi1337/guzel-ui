import type { FC } from 'react';

// src/components/ui/hello/Hello.tsx
interface HelloProps {
  className?: string;
}

export const Hello: FC<HelloProps> = ({ className }) => {
  return (
    <h1
      className={`
        bg-white p-4 text-black
        dark:bg-blue-700 dark:text-white
        ${className}
      `}
    >
      Hello, Guzel UI!
    </h1>
  );
};
