"use client";

import React from "react";
import PlayerTable from "@/components/admin/player/PlayerTable";

export default function RegistryPage() {
  return (
    <>
      <div className="relative z-10 h-[calc(100vh-100px)]">
        <PlayerTable />
      </div>
    </>
  );
}
