import { createContext, ReactNode } from 'react';
import { supabase } from '../lib/supabase';

export const SupabaseContext = createContext(supabase);

function SupabaseProvider({ children }: { children: ReactNode }) {
  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
}

export default SupabaseProvider;
