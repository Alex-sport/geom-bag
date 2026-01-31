import { routes } from '@/utils/routs';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import LogoImg from '../../../public/logo_new_full.svg';
import { LogoProps } from './Logo.props';

const Logo: FC<LogoProps> = ({ sticky, width = 190, height = 36, className }) => {
  return (
    <Link
      href={routes.HOME}
      id="logo-desktop"
      className={cn('logo relative block w-fit', className)}
    >
      <LogoImg width={width} height={height} aria-label="Логотип сайту" className="" />
    </Link>
  );
};

export default Logo;
