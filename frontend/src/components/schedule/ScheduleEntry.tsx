import FontaineBG from "@/assets/images/backgrounds/fontaine.jpg";
import InazumaBG from "@/assets/images/backgrounds/inazuma.jpg";
import LiyueBG from "@/assets/images/backgrounds/liyue.jpg";
import MondstadtBG from "@/assets/images/backgrounds/mondstadt.jpg";
import NatlanBG from "@/assets/images/backgrounds/natlan.jpg";
import SumeruBG from "@/assets/images/backgrounds/sumeru.jpg";
import SnezhnayaBG from "@/assets/images/backgrounds/snezhnaya.jpg";

type Props = {
  game?: string;
  teamA?: string | null;
  teamB?: string | null;
  date?: string | null;
  time?: string | null;
  location?: string | null;
};

const formatDate = (dateStr?: string | null) => {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

// map specific keywords to backgrounds
const BG_MAP: Record<string, string> = {
  fontaine: FontaineBG.src,
  inazuma: InazumaBG.src,
  liyue: LiyueBG.src,
  mondstadt: MondstadtBG.src,
  natlan: NatlanBG.src,
  sumeru: SumeruBG.src,
  snezhnaya: SnezhnayaBG.src,
};

// return a background url if the team name matches a known key (substring match).
// otherwise return undefined (no background).
const pickBg = (name?: string | null) => {
  if (!name) return undefined;
  const key = name.toLowerCase();
  for (const k of Object.keys(BG_MAP)) {
    if (key.includes(k)) return BG_MAP[k];
  }
  return undefined;
};

const ScheduleEntry = ({ game, teamA, teamB, date, time, location }: Props) => {
  const formattedDate = formatDate(date);
  const bgA = pickBg(teamA);
  const bgB = pickBg(teamB);

  const leftClip = "polygon(0 0, 60% 0, 40% 100%, 0 100%)";
  const rightClip = "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)";

  return (
    <article className="relative w-full h-28 rounded-lg overflow-hidden border border-white/20">
      {/* background halves */}
      <div className="absolute inset-0" aria-hidden>
        {bgA && (
          <div
            className="absolute inset-0"
            style={{
              clipPath: leftClip,
              backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${bgA})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        {bgB && (
          <div
            className="absolute inset-0"
            style={{
              clipPath: rightClip,
              backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${bgB})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        {/* subtle divider line */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 39%, rgba(255,255,255,0.06) 41%, rgba(255,255,255,0.06) 59%, rgba(255,255,255,0) 61%)",
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* content */}
      <div className="relative z-10 flex items-center h-full px-4">
        <div className="flex-1 text-left text-white drop-shadow-sm">
          <div className="text-sm uppercase text-white/80">Team A</div>
          <div className="font-semibold text-lg">{teamA ?? "TBD"}</div>
        </div>

        {/* center VS + meta */}
        <div className="flex-none text-center mx-4">
          <div className="font-bold text-white text-lg">VS</div>
          <div className="text-xs text-white/90 mt-1">
            {formattedDate ?? "TBD"} • {time ?? "TBD"}
          </div>
          <div className="text-xs text-white/80">{location ?? ""}</div>
        </div>

        <div className="flex-1 text-right text-white drop-shadow-sm">
          <div className="text-sm uppercase text-white/80">Team B</div>
          <div className="font-semibold text-lg">{teamB ?? "TBD"}</div>
        </div>
      </div>

      {/* game title footer */}
      {game && (
        <div className="absolute left-4 bottom-2 text-xs text-white/80 z-20">
          {game}
        </div>
      )}
    </article>
  );
};

export default ScheduleEntry;