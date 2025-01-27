import { BaseServiceLayout } from "@/components/services/BaseServiceLayout";
import { pressureServiceInfo } from "@/data/services/plumbing/pressureService";

const Pressure = () => (
  <BaseServiceLayout serviceInfo={pressureServiceInfo} />
);

export default Pressure;