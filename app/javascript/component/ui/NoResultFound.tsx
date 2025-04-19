type NoResultsFoundProps = {
  message: string;
};

const NoResultsFound: React.FC<NoResultsFoundProps> = ({ message }) => {
  return (
    <div className="w-full flex flex-grow items-center justify-center text-gray-500">
      <span className="text-2xl">{message}</span>
    </div>
  );
};

export default NoResultsFound;
