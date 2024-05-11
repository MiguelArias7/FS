import { WhatWeDo } from "../../components/WhatWeDo";
import { Info } from "../../components/Info";
import { TightLayout } from "../../components/TightLayout";
import { Territory } from "../../components/Territory";

function WhoAreWe() {
  return (
    <>
      <Info></Info>
      <TightLayout>
        <WhatWeDo></WhatWeDo>
        <Territory></Territory>
      </TightLayout>
    </>
  );
}

export { WhoAreWe };
