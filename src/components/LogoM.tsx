import React from 'react';

interface LogoMProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function LogoM({ size = 42, color = '#4B552B', className = '' }: LogoMProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo Dra. Mayume Amorim"
    >
      {/* Outer circular ring with the signature opening at the bottom-left matching the brand */}
      <path
        d="M 68 238 C 30 205 18 152 35 102 C 54 48 108 14 165 15 C 232 16 285 70 285 138 C 285 208 228 268 152 268 C 112 268 85 254 68 238"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Main Calligraphic 'M' Monogram */}
      {/* 1. Initial sweeping flourish on the left that loops from left/center down to bottom-left */}
      <path
        d="M 108 142 C 78 138 42 148 20 176 C 5 195 2 214 12 226 C 24 238 52 235 84 212 C 105 196 118 175 125 156 C 116 166 98 178 80 182 C 55 187 36 178 38 162 C 40 148 68 140 108 142 Z"
        fill={color}
      />

      {/* 2. Left Main Ascending Stem to First Apex */}
      <path
        d="M 45 228 C 70 215 105 175 136 118 C 148 94 158 68 162 48 C 163 44 165 44 166 48 C 166 60 162 90 152 128 C 138 180 115 224 85 246 C 70 257 52 250 45 228 Z"
        fill={color}
      />

      {/* 3. First Apex descending into the central deep V-valley */}
      <path
        d="M 163 48 C 166 58 168 85 170 120 C 172 155 174 182 176 202 C 176 206 179 206 181 201 C 185 190 188 175 190 155 C 190 150 185 170 182 188 C 180 196 176 195 175 188 C 171 145 168 95 163 48 Z"
        fill={color}
      />

      {/* 4. Second Ascending Stem to Right Apex & Descending Flourish */}
      <path
        d="M 178 198 C 186 165 204 112 225 72 C 235 52 244 38 248 36 C 249 35 250 37 249 42 C 244 65 235 110 228 152 C 222 188 222 215 228 228 C 234 240 248 244 265 238 C 275 234 284 226 288 220 C 289 218 290 220 288 223 C 280 234 268 244 252 248 C 234 252 218 244 214 225 C 210 205 212 172 218 135 C 228 85 240 48 248 37 C 242 46 226 88 210 132 C 195 172 184 195 178 198 Z"
        fill={color}
      />
    </svg>
  );
}
