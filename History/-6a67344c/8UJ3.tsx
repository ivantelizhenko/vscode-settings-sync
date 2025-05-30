import { ReactNode } from 'react';

function AppLayout({ children }: { children: ReactNode }) {
  return <div className="flex flex-col p-[2.4rem 4.8rem]">{children}</div>;
}

export default AppLayout;
