import { useContext } from 'react';
import { SupabaseContext } from '../../context/SupabaseContext';
import { supabase } from '../../lib/supabase';

export const SupabaseContext = createContext(supabase);
export const useSupabase = () => useContext(SupabaseContext);
