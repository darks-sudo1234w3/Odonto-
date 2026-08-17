import React from 'react';
import logoMayume from '../assets/images/logo_mayume.png';

interface LogoMProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function LogoM({ size = 42, className = '' }: LogoMProps) {
  return (
    <img
      src={logoMayume}
      width={size}
      height={size}
      className={className}
      alt="Monograma oficial da Dra. Mayume Amorim"
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
}
