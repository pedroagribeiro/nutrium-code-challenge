import { AppointmentsPaginationProvider } from './AppointmentsPaginationContext';

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <AppointmentsPaginationProvider>{children}</AppointmentsPaginationProvider>;
};
