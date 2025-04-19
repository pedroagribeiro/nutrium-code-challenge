import ProfessionalComponent from '../../component/professionals/Professional';
import GeneralLayout from '../../layout/GeneralLayout';
import { Professional } from '../../types/professionals.types';

type ShowProps = {
  professional: Professional;
};

const Show: React.FC<ShowProps> = ({ professional }) => {
  return (
    <GeneralLayout>
      <ProfessionalComponent {...professional} />
    </GeneralLayout>
  );
};

export default Show;
