import api from './api';

export interface Player {
  id: string;
  full_name: string;
  cys: string;
  team_id: string;
  team?: {
    name: string;
    color?: string;
    section_represented?: string;
  };
}

export const playerService = {
  getPlayers: async (teamName?: string): Promise<Player[]> => {
    try {
      const params = teamName ? { team_name: teamName } : {};
      const response = await api.get('/player', { params });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch players:', error);
      return [];
    }
  },

  getPlayerById: async (id: string): Promise<Player | null> => {
    try {
      const response = await api.get(`/player/${id}`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch player by ID:', error);
      return null;
    }
  },

  createPlayer: async (data: Partial<Player>): Promise<Player | null> => {
    try {
      const response = await api.post('/player', data);
      return response.data;
    } catch (error) {
      console.error('Failed to create player:', error);
      throw error;
    }
  },

  updatePlayer: async (id: string, data: Partial<Player>): Promise<Player | null> => {
    try {
      const response = await api.put(`/player/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Failed to update player:', error);
      throw error;
    }
  },

  deletePlayer: async (id: string): Promise<void> => {
    try {
      await api.delete(`/player/${id}`);
    } catch (error) {
      console.error('Failed to delete player:', error);
      throw error;
    }
  },
};
