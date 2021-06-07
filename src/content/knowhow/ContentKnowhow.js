import React, { useState } from "react";
import KnowhowByArea from "./KnowhowByArea.js";
import ExpertTip from "./ExpertTip.js";
import LivingRoom from "./LivingRoom.js";
function ContentKnowhow() {
  const [Detail, setDetail] = useState(false);

  return (
    <>
      <KnowhowByArea Detail={Detail} setDetail={setDetail} />
      {Detail ? <LivingRoom /> : <ExpertTip />}
    </>
  );
}

export default ContentKnowhow;
