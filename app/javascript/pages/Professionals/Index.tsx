import React from "react";
import SearchPageLayout from "../../layout/SearchPageLayout";
import type { Professional } from "../../types/professionals.types"
import ProfessionalComponent from "../../component/professionals/Professional";
import Paginator from "../../component/navigation/Paginator";

type IndexProps = {
    professionals: Professional[]
}

const Index: React.FC<IndexProps> = ({ professionals }) => {
    const [professional, setProfessional] = React.useState<number>(1);

    return (
        <SearchPageLayout>
            <ProfessionalComponent {...professionals[professional]} />
            {professionals.length > 0 &&
                <Paginator
                    pageCount={professionals.length}
                    currentPage={professional}
                    setPrevious={() => {
                            const previous = professional - 1;
                            if (previous < 1) {
                                setProfessional(1)
                            } else {
                                setProfessional(previous)
                            }
                        }
                    }
                    setNext={() => {
                            const next = professional + 1;
                            if (next > professionals.length) {
                                setProfessional(professionals.length)
                            } else {
                                setProfessional(next)
                            }
                        }
                    }
                    setPage={(page: number) => setProfessional(page)}
                />
            }
        </SearchPageLayout>
    )
}

export default Index;