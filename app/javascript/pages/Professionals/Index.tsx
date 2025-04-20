import React from 'react';
import SearchPageLayout from '../../layout/SearchPageLayout';
import type { Professional } from '../../types/professionals.types';
import ProfessionalComponent from '../../component/professionals/Professional';
import Paginator from '../../component/navigation/Paginator';
import { router } from '@inertiajs/react';
import Loading from '../../component/ui/Loading';

type IndexProps = {
  professionals: Professional[];
};

const Index: React.FC<IndexProps> = ({ professionals }) => {
  const [professional, setProfessional] = React.useState<number>(1);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [location, setLocation] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const performSearch = () => {
    const data: { search?: string; location?: string } = {};
    if (searchTerm !== '') {
      data.search = searchTerm;
    }
    if (location !== '') {
      data.location = location;
    }

    router.visit('/professionals', {
      method: 'get',
      data,
      preserveState: true,
      replace: true,
      onStart: () => {
        setIsLoading(true);
      },
      onFinish: () => {
        setProfessional(1);
        setIsLoading(false);
      },
    });
  };

  const displayResults = () => {
    if (professionals.length > 0) {
      return (
        <>
          <ProfessionalComponent {...professionals[professional - 1]} />
          <div className="flex flex-1" />
          <Paginator
            pageCount={professionals.length}
            currentPage={professional}
            setPrevious={() => {
              const previous = professional - 1;
              if (previous < 1) {
                setProfessional(1);
              } else {
                setProfessional(previous);
              }
            }}
            setNext={() => {
              const next = professional + 1;
              if (next > professionals.length) {
                setProfessional(professionals.length);
              } else {
                setProfessional(next);
              }
            }}
            setPage={(page: number) => setProfessional(page)}
          />
        </>
      );
    }
  };

  return (
    <SearchPageLayout
      setSearchTerm={setSearchTerm}
      setLocation={setLocation}
      performSearch={performSearch}
    >
      {isLoading ? <Loading message="Loading..." /> : displayResults()}
    </SearchPageLayout>
  );
};

export default Index;
