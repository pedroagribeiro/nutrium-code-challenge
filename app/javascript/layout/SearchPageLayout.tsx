import { useTranslation } from "react-i18next"
import Searchbar from "../component/layout/Searchbar"

type SearchPageLayoutProps = {
    children: React.ReactNode
    setSearchTerm: (term: string) => void
    setLocation: (location: string) => void
    performSearch: () => void
}

const SearchPageLayout: React.FC<SearchPageLayoutProps> = ({ children, setSearchTerm, setLocation, performSearch }) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col w-full min-h-screen bg-[#fafafa]">
            <Searchbar setSearchTerm={setSearchTerm} setLocation={setLocation} performSearch={performSearch} />
            <div className="flex flex-col justify-center space-y-8 px-2 lg:px-10 my-6">
                {children}
            </div>
        </div>
    )
}

export default SearchPageLayout;