import AppointmentsBar from '../component/layout/AppointmentsBar';

type AppointmentsPageLayoutProps = {
  children: React.ReactNode;
  listLength: number;
};

const AppointmentsPageLayout: React.FC<AppointmentsPageLayoutProps> = ({
  children,
  listLength,
}) => {
  return (
    <div className="w-full min-h-screen bg-white lg:px-10">
      {/* Title and navigation bar */}
      <AppointmentsBar listLength={listLength} />

      {/* Pending requests  */}
      <div className="flex flex-col flex-1 justify-start space-y-8 lg:px-6 my-6">{children}</div>
    </div>
  );
};

export default AppointmentsPageLayout;
