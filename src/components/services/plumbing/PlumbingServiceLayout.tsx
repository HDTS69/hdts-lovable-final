import { ReactNode } from "react";
import { BaseServiceLayout } from "../BaseServiceLayout";

interface PlumbingServiceLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const PlumbingServiceLayout = ({ title, description, children }: PlumbingServiceLayoutProps) => {
  return (
    <BaseServiceLayout
      title={title}
      description={description}
      servicePath="/plumbing"
    >
      {children}
    </BaseServiceLayout>
  );
};