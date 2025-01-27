import { BaseServiceLayout } from "@/components/services/BaseServiceLayout";
import { fixturesServiceInfo } from "@/data/services/plumbing/fixturesService";

const Fixtures = () => (
  <BaseServiceLayout serviceInfo={fixturesServiceInfo} />
);

export default Fixtures;