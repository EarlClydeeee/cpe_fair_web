import MainLogoArchon from "@/components/MainLogo";
import MOCK_SCHEDULE from "./games";
import ScheduleEntry from "@/components/schedule/ScheduleEntry";

interface SchedulePageProps {
  params: { game: string } | Promise<{ game: string }>;
}

export default async function SchedulePage({ params }: SchedulePageProps) {
  const { game } = await params;
  const MOCK_DATA = MOCK_SCHEDULE.find(item => item.id === game);

  // support different mock shapes -> schedule or games
  const entries = MOCK_DATA?.schedule ?? [];

  return (
    <div className="min-h-screen bg-[#010010] flex flex-col items-center">
        
      <MainLogoArchon />

      <div className="text-white flex flex-col items-center">
        <h1 className="text-3xl">Official Schedule</h1>
        <h2 className="text-2xl">{MOCK_DATA?.game}</h2>
      </div>

      <div className="text-white w-screen mt-6">
        <div className="mx-10 flex flex-col gap-4">
          {entries.length ? (
            entries.map((entry: any, i: number) => (
              <ScheduleEntry
                key={entry.id ?? `${entry.game}-${entry.date ?? "nodate"}-${entry.time ?? "notime"}-${i}`}
                game={entry.game}
                teamA={entry.teamA}
                teamB={entry.teamB}
                date={entry.date}
                time={entry.time}
                location={entry.location}
              />
            ))
          ) : (
            <div className="text-center text-black/70 p-4">No schedule entries found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
