"use client";

import { useState } from "react";
import { JugadSubmitForm } from "@/components/jugad-submit-form";
import { JugadList } from "@/components/jugad-list";

export default function JugadClient() {
  const [refresh, setRefresh] = useState(0);
  return (
    <>
      <JugadSubmitForm onCreated={() => setRefresh((n) => n + 1)} />
      <JugadList refreshSignal={refresh} />
    </>
  );
}