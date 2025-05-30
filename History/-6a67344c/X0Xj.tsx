import { ReactNode } from 'react';

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col py-[2.4rem] px-[2.4rem] bg-red-600">
      {children}
    </div>
  );
}

export default AppLayout;
