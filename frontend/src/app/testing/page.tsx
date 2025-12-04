"use client";

import { useState, useEffect } from "react";
import { useGames } from "../../hooks/useGame";
import { useCreateScore } from "../../hooks/useScore";
import { Game } from "@/types/game";
import { usePlayers } from "../../hooks/usePlayers";
import { useTeams } from "../../hooks/useTeams";

function GameCard({ game }: { game: Game }) {
  return (
    <div className="p-6 bg-[#1e2130]/50 border border-[#3b3f54] rounded-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1">
          <h2 className="text-xl font-bold">{game.name}</h2>
          <p className="text-sm text-[#8a8d99]">{game.category} - {game.is_group ? 'Group' : 'Solo'}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestingPage() {
  const { data: gamesData, isLoading: gamesLoading, isError: gamesError } = useGames();
  const { data: teams = [], isLoading: teamsLoading } = useTeams();
  const createScoreMutation = useCreateScore();

  const [formData, setFormData] = useState({
    teamId: '',
    points: 100,
    game: '',
    category: 'Sports',
    contributor: ''
  });

  // Set default team when teams are loaded
  useEffect(() => {
    if (teams.length > 0 && !formData.teamId) {
      setFormData(prev => ({ ...prev, teamId: teams[0].id }));
    }
  }, [teams]);

  const [playerSearch, setPlayerSearch] = useState('');
  const [showPlayerDropdown, setShowPlayerDropdown] = useState(false);

  const selectedTeam = teams.find((t: any) => t.id === formData.teamId);
  const targetTeamName = selectedTeam?.section_represented || selectedTeam?.name;

  const { data: players = [], refetch } = usePlayers(undefined, (allPlayers) => {
    if (!targetTeamName) return [];
    return allPlayers.filter((p: any) => 
      p.team?.name === targetTeamName || 
      p.team?.section_represented === targetTeamName
    );
  });

  useEffect(() => {
    refetch();
  }, [targetTeamName, refetch]);

  const filteredPlayers = players.filter(p => 
    p.full_name.toLowerCase().includes(playerSearch.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createScoreMutation.mutate({
      ...formData,
      isGroup: false,
      members: []
    }, {
      onSuccess: () => {
        alert('Score logged successfully!');
      },
      onError: (error) => {
        console.error(error);
        alert('Failed to log score.');
      }
    });
  };

  return (
    <div className="p-8 bg-[#0c0e16] min-h-screen text-[#ece5d8]">   
      <h2 className="text-2xl font-bold font-serif text-[#d3bc8e] mb-4">Games</h2>
      {gamesLoading ? (
        <p>Loading games...</p>
      ) : gamesError ? (
        <p className="text-red-400">Error loading games</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {gamesData?.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}

      <div className="max-w-md bg-[#1e2130] p-6 rounded-xl border border-[#3b3f54]">
        <h2 className="text-xl font-bold text-[#d3bc8e] mb-4">Log Test Score</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">Team</label>
            {teamsLoading ? (
              <p className="text-sm text-[#8a8d99]">Loading teams...</p>
            ) : (
              <select 
                value={formData.teamId}
                onChange={(e) => {
                  setFormData({...formData, teamId: e.target.value, contributor: ''});
                  setPlayerSearch('');
                }}
                className="w-full bg-[#0c0e16] border border-[#3b3f54] rounded p-2"
              >
                {teams.map((t: any) => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Game</label>
            <select 
              value={formData.game}
              onChange={(e) => setFormData({...formData, game: e.target.value})}
              className="w-full bg-[#0c0e16] border border-[#3b3f54] rounded p-2"
            >
              <option value="">Select Game</option>
              {gamesData?.map(g => <option key={g.id} value={g.name}>{g.name}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Points</label>
            <input 
              type="number"
              value={formData.points}
              onChange={(e) => setFormData({...formData, points: Number(e.target.value)})}
              className="w-full bg-[#0c0e16] border border-[#3b3f54] rounded p-2"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-bold mb-2">Contributor (Player)</label>
            <input 
              type="text"
              value={playerSearch}
              onChange={(e) => {
                setPlayerSearch(e.target.value);
                setFormData({...formData, contributor: e.target.value});
                setShowPlayerDropdown(true);
              }}
              onFocus={() => setShowPlayerDropdown(true)}
              onBlur={() => setTimeout(() => setShowPlayerDropdown(false), 200)}
              placeholder="Search player..."
              className="w-full bg-[#0c0e16] border border-[#3b3f54] rounded p-2"
            />
            {showPlayerDropdown && (
              <div className="absolute z-10 w-full bg-[#1e2130] border border-[#3b3f54] rounded mt-1 max-h-48 overflow-y-auto shadow-lg">
                {filteredPlayers.length > 0 ? (
                  filteredPlayers.map(player => (
                    <div 
                      key={player.id}
                      className="p-2 hover:bg-[#2d3042] cursor-pointer text-sm"
                      onClick={() => {
                        setFormData({...formData, contributor: player.full_name});
                        setPlayerSearch(player.full_name);
                        setShowPlayerDropdown(false);
                      }}
                    >
                      {player.full_name} <span className="text-xs text-[#8a8d99]">({player.cys} - {player.team?.name})</span>
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-sm text-[#8a8d99]">No players found</div>
                )}
              </div>
            )}
          </div>

          <button 
            type="submit" 
            disabled={createScoreMutation.isPending}
            className="w-full bg-[#d3bc8e] text-[#1e2130] font-bold py-2 rounded hover:bg-[#e6cfa3] disabled:opacity-50"
          >
            {createScoreMutation.isPending ? 'Logging...' : 'Log Score'}
          </button>
        </form>
      </div>
    </div>
  );
}
