import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

type PaginatorProps = {
    pageCount: number
    currentPage: number
    setPrevious: () => void
    setNext: () => void
    setPage: (page: number) => void
}

const Paginator: React.FC<PaginatorProps> = ({ pageCount, currentPage, setPrevious, setNext, setPage }: PaginatorProps) => {
    return (
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden text-lg text-gray-500">
                <a
                    className="relative inline-flex items-center rounded-sm border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-[#dcfaf0] hover:text-[#0f766e] focus:outline-offset-0"
                    onClick={() => setPrevious()}
                >
                    PREVIOUS
                </a>
                <a
                    className="relative ml-3 inline-flex items-center rounded-sm border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
                    onClick={() => setNext()}
                >
                    NEXT
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <nav aria-label="Pagination" className="inline-flex -space-x-px rounded-sm shadow-xs text-gray-400 bg-white">
                        <a
                            className="relative inline-flex items-center rounded-l-sm px-2 py-2 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => setPrevious()}
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon aria-hidden="true" className="size-5" />
                        </a>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        <a
                            aria-current="page"
                            className="relative z-10 inline-flex items-center bg-[#dcfaf0] px-4 py-2 text-sm font-semibold text-[#0f766e] focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dcfaf0]"
                            onClick={() => setPage(currentPage)}
                        >
                            {currentPage}
                        </a>
                        {pageCount - currentPage > 1 &&
                        <a
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => setPage(currentPage + 1)}
                        >
                            {currentPage + 1}
                        </a>}
                        {pageCount - currentPage > 2 &&
                        <a
                            className="relative hidden items-center px-4 py-2 text-sm font-semibold hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            onClick={() => setPage(currentPage + 2)}
                        >
                            {currentPage + 2}
                        </a>}
                        {pageCount - currentPage > 3 &&
                        <a
                            className="relative hidden items-center px-4 py-2 text-sm font-semibold hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            onClick={() => setPage(currentPage + 3)}
                        >
                            {currentPage + 3}
                        </a>}
                        {pageCount - currentPage > 4 &&
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:outline-offset-0">
                            ...
                        </span>}
                        <a
                            className="relative inline-flex items-center rounded-r-sm px-2 py-2 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => setNext()}
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon aria-hidden="true" className="size-5" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Paginator;