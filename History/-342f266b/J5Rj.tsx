import { createContext, ReactNode, useContext } from 'react';
import { supabase } from '../lib/supabase';

const SupabaseContext = createContext(supabase);

function SupabaseProvider({ children }: { children: ReactNode }) {
  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
}

/* eslint-disable react-refresh/only-export-components */
export const useSupabase = () => useContext(SupabaseContext);

export default SupabaseProvider;
