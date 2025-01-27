import { BaseServiceLayout } from "@/components/services/BaseServiceLayout";
import { sewerServiceInfo } from "@/data/services/plumbing/sewerService";

const Sewer = () => (
  <BaseServiceLayout serviceInfo={sewerServiceInfo} />
);

export default Sewer;