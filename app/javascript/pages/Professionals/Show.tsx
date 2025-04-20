import ProfessionalComponent from '../../component/professionals/Professional';
import ProfessionalPageLayout from '../../layout/ProfessionalPageLayout';
import { Professional } from '../../types/professionals.types';

type ShowProps = {
  professional: Professional;
};

const Show: React.FC<ShowProps> = ({ professional }) => {
  return (
    <ProfessionalPageLayout>
      <ProfessionalComponent {...professional} />
    </ProfessionalPageLayout>
  );
};

export default Show;
