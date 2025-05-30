import { useContext } from 'react';
import { SupabaseContext } from '../../context/SupabaseContext';

export const useSupabase = () => useContext(SupabaseContext);
export const SupabaseContext = createContext(supabase);
