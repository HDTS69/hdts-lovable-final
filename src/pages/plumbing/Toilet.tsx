import { BaseServiceLayout } from "@/components/services/BaseServiceLayout";
import { toiletServiceInfo } from "@/data/services/plumbing/toiletService";

const Toilet = () => (
  <BaseServiceLayout serviceInfo={toiletServiceInfo} />
);

export default Toilet;