import { routes } from '@/utils/routs';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import LogoImage from '../../../public/logo.svg';
import { LogoProps } from './Logo.props';

const MobileLogo: FC<LogoProps> = ({ sticky, width = 109, height = 21, className }) => {
  return (
    <Link href={routes.HOME} className={cn('logo block w-fit', { ['py-4']: sticky }, className)}>
      <LogoImage width={width} height={height} aria-label="Логотип сайту" className="" />
    </Link>
  );
};

export default MobileLogo;
