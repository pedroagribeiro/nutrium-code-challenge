type GeneralLayoutProps = {
    children: React.ReactNode;
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
    return (
        <div className="w-full min-h-screen bg-white px-10">
            {children}
        </div>
    )
}
export default GeneralLayout;