import { createContext, useContext } from "react";

export const SupabaseContext = createContext(supabase);
export const useSupabase = () => useContext(SupabaseContext);
