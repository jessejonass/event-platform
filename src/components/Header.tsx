import { FC } from 'react';
import Logo from './Icons/Logo';

const Header: FC = () => {
  return (
    <header className='w-full py-5 flex items-center justify-center bg-gray-700'>
      <Logo />
    </header>
  );
};

export default Header;
