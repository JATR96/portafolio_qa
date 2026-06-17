import { ReactNode } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}

export interface ClassNameProps {
  className?: string;
}

export interface ContainerProps
  extends ChildrenProps,
    ClassNameProps {}

export interface PageWrapperProps
  extends ChildrenProps,
    ClassNameProps {}