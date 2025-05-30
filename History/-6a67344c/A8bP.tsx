import { ReactNode } from 'react';

type AppLayoutProps = { children: ReactNode };

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col py-[2.4rem] px-[2.4rem] h-screen w-[120rem] max-h-screen ">
      {children}
    </div>
  );
}

export default AppLayout;
