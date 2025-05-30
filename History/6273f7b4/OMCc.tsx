import { createContext, useContext, useEffect, useReducer } from 'react';

const FormContext = createContext<FormContextValue | null>(null);

const initialState: FormState = {
  formStatus: 'add',
};

function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case 'form/setAddStatus': {
      return {
        ...state,
        formStatus: 'add',
      };
    }
    case 'form/setEditStatus': {
      return {
        ...state,
        formStatus: 'edit',
      };
    }
    default:
      throw new Error('Unknown action type');
  }
}

function FormProvider({ children }: FormContextProviderProps) {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const ctx: FormContextValue = {
    ...formState,
    setFormAddStatus() {
      dispatch({ type: 'form/setAddStatus' });
    },
    setFormEditStatus() {
      dispatch({ type: 'form/setEditStatus' });
    },
  };

  return <FormContext.Provider value={ctx}>{children}</FormContext.Provider>;
}

function useForm() {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error('BooksContext was used outside of the FormProvider');

  return context as FormContextValue;
}

// eslint-disable-next-line react-refresh/only-export-components
export { FormProvider, useForm };
