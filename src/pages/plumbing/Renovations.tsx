import { BaseServiceLayout } from "@/components/services/BaseServiceLayout";
import { renovationsServiceInfo } from "@/data/services/plumbing/renovationsService";

const Renovations = () => (
  <BaseServiceLayout serviceInfo={renovationsServiceInfo} />
);

export default Renovations;