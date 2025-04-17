import AppointmentsBar from "../component/layout/AppointmentsBar";

type AppointmentsPageLayoutProps = {
  children: React.ReactNode;
}

const AppointmentsPageLayout: React.FC<AppointmentsPageLayoutProps> = ({ children }) => {
    return (
        <div className="w-full min-h-screen bg-white px-10">
            {/* Title and navigation bar */}
            <AppointmentsBar />

            {/* Pending requests  */}
            <div className="grid grid-cols-3 gap-6 px-10">
                {children}
            </div>
        </div>
    )
}

export default AppointmentsPageLayout;