import React, { createContext, ReactNode, useContext } from 'react';
import { supabase } from '../lib/supabase';

const SupabaseContext = createContext(supabase);

function SupabaseProvider ({ children }:{children: ReactNode}) {
  export const useSupabase = () => useContext(SupabaseContext);

  return <SupabaseContext.Provider value={supabase}>
    {children}
  </SupabaseContext.Provider>



export default SupabaseProvider;