import { ReactNode } from "react";
import { BaseServiceLayout } from "../BaseServiceLayout";

interface ACServiceLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const ACServiceLayout = ({ title, description, children }: ACServiceLayoutProps) => {
  return (
    <BaseServiceLayout
      title={title}
      description={description}
      servicePath="/air-conditioning"
    >
      {children}
    </BaseServiceLayout>
  );
};