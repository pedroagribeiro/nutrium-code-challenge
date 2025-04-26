import { createContext, useCallback, useContext, useState } from 'react';

export const PAGE_SIZE: number = 6;

type AppointmentsPaginationContextType = {
  page: number;
  setPreviousPage: () => void;
  setNextPage: () => void;
  existsPreviousPage: () => boolean;
  existsNextPage: (listLength: number) => boolean;
};

const AppointmentsPaginationContext = createContext<AppointmentsPaginationContextType | undefined>(
  undefined,
);

type AppointmentsPaginationProviderProps = {
  children: React.ReactNode;
};

// NOTE: Page size is 6
export const AppointmentsPaginationProvider: React.FC<AppointmentsPaginationProviderProps> = ({
  children,
}) => {
  const [page, setPage] = useState<number>(1);

  const setPreviousPage = useCallback(() => {
    setPage((prevPage) => prevPage - 1);
  }, []);

  const setNextPage = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const existsPreviousPage = useCallback(() => {
    return page > 1;
  }, [page]);

  const existsNextPage = useCallback(
    (listLength: number) => {
      return (page + 1) * PAGE_SIZE < listLength;
    },
    [page],
  );

  return (
    <AppointmentsPaginationContext.Provider
      value={{ page, setPreviousPage, setNextPage, existsPreviousPage, existsNextPage }}
    >
      {children}
    </AppointmentsPaginationContext.Provider>
  );
};

export const useAppointmentsPagination = () => {
  const context = useContext(AppointmentsPaginationContext);
  if (!context) {
    throw new Error(
      'useAppointmentsPagination should be used inside an AppointmentsPaginationProvider',
    );
  }
  return context;
};
