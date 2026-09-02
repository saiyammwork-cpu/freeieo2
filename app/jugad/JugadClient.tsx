"use client";

import { useState } from "react";
import { JugadList } from "@/components/jugad-list";

export default function JugadClient() {
  const [refresh] = useState(0);
  return (
    <>
      <JugadList refreshSignal={refresh} />
    </>
  );
}