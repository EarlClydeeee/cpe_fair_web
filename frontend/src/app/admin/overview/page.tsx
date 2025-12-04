"use client";

import { Plus, TrendingUp } from "lucide-react";
import ScoreTable from "@/components/admin/score/ScoreTable";
import LogScoreModal from "@/components/admin/score/LogScoreModal";

export default function OverviewPage() {
  return (
    <>
      <div className="flex gap-6 h-[calc(100vh-100px)] relative z-10">
        {/* LEFT: Table (70%) */}
        <div className="flex-[7] min-h-[500px]">
          <ScoreTable />
        </div>

        {/* RIGHT: Actions Sidebar (30%) */}
        <div className="flex-[3] space-y-4">
          <div className="bg-[#1e2130]/80 backdrop-blur-md p-6 rounded-xl border border-[#3b3f54] shadow-2xl">
            <h3 className="text-lg font-bold text-[#d3bc8e] mb-4 flex items-center gap-2">
              <TrendingUp size={18} />
              Actions
            </h3>

            <div className="space-y-3">
              {/* Log Score Button */}
              <LogScoreModal />

              {/* Add Player Button (Placeholder) */}
              <button
                disabled
                className="w-full bg-[#3b3f54] text-[#8a8d99] font-bold py-3 px-4 rounded-lg cursor-not-allowed opacity-50 flex items-center justify-center gap-2"
              >
                <Plus size={18} />
                Add Player
              </button>
            </div>
          </div>

          {/* Quick Stats Placeholder */}
          <div className="bg-[#1e2130]/80 backdrop-blur-md p-6 rounded-xl border border-[#3b3f54] shadow-2xl">
            <h3 className="text-sm font-bold text-[#8a8d99] uppercase tracking-wider mb-3">
              Quick Stats
            </h3>
            <div className="space-y-2 text-sm text-[#ece5d8]">
              <div className="flex justify-between">
                <span className="text-[#8a8d99]">Total Scores:</span>
                <span className="font-bold text-[#d3bc8e]">-</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8a8d99]">Today:</span>
                <span className="font-bold text-[#d3bc8e]">-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
