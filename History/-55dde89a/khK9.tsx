import { useContext } from 'react';
import { SupabaseContext } from '../../context/SupabaseContext';

export const SupabaseContext = createContext(supabase);
export const useSupabase = () => useContext(SupabaseContext);
