import React from 'react';
import Bar from '../component/layout/Bar';

type ProfessionalPageLayoutProps = {
  children: React.ReactNode;
};

const ProfessionalPageLayout: React.FC<ProfessionalPageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#fafafa]">
      <Bar />
      <div className="flex flex-col flex-1 justify-start space-y-8 px-2 lg:px-10 my-6">
        {children}
      </div>
    </div>
  );
};

export default ProfessionalPageLayout;
