import { BaseServiceLayout } from "@/components/services/BaseServiceLayout";
import { pipesServiceInfo } from "@/data/services/plumbing/pipesService";

const Pipes = () => (
  <BaseServiceLayout serviceInfo={pipesServiceInfo} />
);

export default Pipes;