import { ReactNode } from "react";
import { BaseServiceLayout } from "../BaseServiceLayout";

interface GasServiceLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const GasServiceLayout = ({ title, description, children }: GasServiceLayoutProps) => {
  return (
    <BaseServiceLayout
      title={title}
      description={description}
      servicePath="/gas-fitting"
    >
      {children}
    </BaseServiceLayout>
  );
};