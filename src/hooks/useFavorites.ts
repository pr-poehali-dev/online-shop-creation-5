import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesStore {
  favorites: number[];
  favoritesCount: number;
  toggleFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}

export const useFavorites = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      favoritesCount: 0,

      toggleFavorite: (productId) => {
        const favorites = get().favorites;
        
        if (favorites.includes(productId)) {
          set({
            favorites: favorites.filter((id) => id !== productId),
            favoritesCount: get().favoritesCount - 1,
          });
        } else {
          set({
            favorites: [...favorites, productId],
            favoritesCount: get().favoritesCount + 1,
          });
        }
      },

      isFavorite: (productId) => {
        return get().favorites.includes(productId);
      },
    }),
    {
      name: 'favorites-storage',
    }
  )
);
