import { BaseServiceLayout } from "@/components/services/BaseServiceLayout";
import { drainCleaningServiceInfo } from "@/data/services/plumbing/drainCleaningService";

const DrainCleaning = () => (
  <BaseServiceLayout serviceInfo={drainCleaningServiceInfo} />
);

export default DrainCleaning;
