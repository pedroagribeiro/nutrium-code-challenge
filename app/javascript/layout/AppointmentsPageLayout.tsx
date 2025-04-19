import AppointmentsBar from '../component/layout/AppointmentsBar';

type AppointmentsPageLayoutProps = {
  children: React.ReactNode;
  setPreviousPage: () => void;
  setNextPage: () => void;
  existsPreviousPage: () => boolean;
  existsNextPage: () => boolean;
};

const AppointmentsPageLayout: React.FC<AppointmentsPageLayoutProps> = ({
  children,
  setPreviousPage,
  setNextPage,
  existsPreviousPage,
  existsNextPage,
}) => {
  return (
    <div className="w-full min-h-screen bg-white px-10">
      {/* Title and navigation bar */}
      <AppointmentsBar
        setPreviousPage={setPreviousPage}
        setNextPage={setNextPage}
        existsPreviousPage={existsPreviousPage}
        existsNextPage={existsNextPage}
      />

      {/* Pending requests  */}
      <div className="flex flex-col flex-1 justify-start space-y-8 px-6 my-6">{children}</div>
    </div>
  );
};

export default AppointmentsPageLayout;
