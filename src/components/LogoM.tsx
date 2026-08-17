interface LogoMProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function LogoM({ size = 48, color = '#4B552B', className = '' }: LogoMProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-labelledby="logo-title"
    >
      <title id="logo-title">Monograma da Dra. Mayume Amorim</title>
      <circle cx="160" cy="160" r="151" fill="#F5F0E7" />
      <path
        d="M75 254C37 225 17 183 20 139C24 78 73 27 136 18C198 9 259 42 288 97C317 152 305 220 260 262C215 304 145 310 94 279"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M118 143C95 130 66 132 46 148C25 165 20 194 35 211C50 229 80 224 103 203C128 180 140 144 151 102C158 75 163 58 168 51C170 48 173 50 173 55C174 82 174 119 177 160C179 191 182 213 187 226C189 231 193 231 196 225C205 206 212 176 222 141C235 96 248 59 261 45C264 42 267 44 266 49C258 89 248 131 245 168C241 208 246 235 260 246C272 255 287 252 300 240"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
