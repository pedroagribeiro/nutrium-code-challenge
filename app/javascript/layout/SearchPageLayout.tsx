import Searchbar from "../component/layout/Searchbar"

type SearchPageLayoutProps = {
    children: React.ReactNode
}

const SearchPageLayout: React.FC<SearchPageLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#fafafa]">
            <Searchbar />
            <div className="flex flex-col justify-center space-y-8 px-2 lg:px-10 my-6">
                {children}
            </div>
        </div>
    )
}

export default SearchPageLayout;