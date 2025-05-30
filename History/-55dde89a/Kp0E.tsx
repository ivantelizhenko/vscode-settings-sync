import { useContext } from 'react';
import { SupabaseContext } from '../../context/SupabaseContext';

export const useSupabase = () => useContext(SupabaseContext);
