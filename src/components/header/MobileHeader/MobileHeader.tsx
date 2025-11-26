import MobileLogo from '@/layout/Logo/MobileLogo';
import BurgerMenuButton from '../BurgerMenuButton';

const MobileHeader = () => {
  return (
    <div className="container  flex justify-between items-center md:hidden">
      <MobileLogo width={109} height={21} className="block" />

      <BurgerMenuButton />
    </div>
  );
};

export default MobileHeader;
