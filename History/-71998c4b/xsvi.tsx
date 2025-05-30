import { ReactNode } from 'react';

interface TextareaProps {
  children: ReactNode;
}

function Textarea({ children, ...other }: TextareaProps) {
  return (
    <textarea className="textarea" {...other}>
      {children}
    </textarea>
  );
}

export default Textarea;
