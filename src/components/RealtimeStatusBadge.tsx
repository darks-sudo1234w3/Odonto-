import React, { useEffect, useState } from 'react';

export function useClinicSchedule() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    // Update every second for responsive real-time clock
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format date in São Paulo timezone (America/Sao_Paulo)
  const spFormatter = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });

  const parts = spFormatter.formatToParts(now);
  const partMap: Record<string, string> = {};
  parts.forEach((p) => {
    partMap[p.type] = p.value;
  });

  const hours = parseInt(partMap.hour || '0', 10);
  const minutes = parseInt(partMap.minute || '0', 10);
  const seconds = parseInt(partMap.second || '0', 10);
  const totalMinutes = hours * 60 + minutes;

  // Day of week in SP (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  // Let's determine weekday index safely
  const weekdayStr = (partMap.weekday || '').toLowerCase();
  let dayOfWeek = 0;
  if (weekdayStr.includes('domingo')) dayOfWeek = 0;
  else if (weekdayStr.includes('segunda')) dayOfWeek = 1;
  else if (weekdayStr.includes('terça') || weekdayStr.includes('terca')) dayOfWeek = 2;
  else if (weekdayStr.includes('quarta')) dayOfWeek = 3;
  else if (weekdayStr.includes('quinta')) dayOfWeek = 4;
  else if (weekdayStr.includes('sexta')) dayOfWeek = 5;
  else if (weekdayStr.includes('sábado') || weekdayStr.includes('sabado')) dayOfWeek = 6;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const formattedTimeShort = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

  const weekdayNames = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];
  const currentWeekdayName = weekdayNames[dayOfWeek];

  let isOpen = false;
  let statusBadge = '';
  let statusDetail = '';
  let nextOpening = '';

  // Monday to Friday: 07:35 - 19:00
  const weekdayOpenMinutes = 7 * 60 + 35; // 7:35 AM
  const weekdayCloseMinutes = 19 * 60; // 19:00 (7:00 PM)

  // Saturday: 08:00 - 13:00
  const saturdayOpenMinutes = 8 * 60; // 8:00 AM
  const saturdayCloseMinutes = 13 * 60; // 13:00 (1:00 PM)

  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    // Weekday
    if (totalMinutes >= weekdayOpenMinutes && totalMinutes < weekdayCloseMinutes) {
      isOpen = true;
      statusBadge = 'Aberto agora';
      statusDetail = 'Fecha hoje às 19:00';
      nextOpening = 'Atendimento em andamento';
    } else if (totalMinutes < weekdayOpenMinutes) {
      isOpen = false;
      statusBadge = 'Fechado agora';
      statusDetail = 'Abre hoje a partir das 7:35';
      nextOpening = 'Abre hoje às 7:35';
    } else {
      isOpen = false;
      statusBadge = 'Fechado agora';
      if (dayOfWeek === 5) {
        statusDetail = 'Abre amanhã (sábado) às 8:00';
        nextOpening = 'Abre amanhã às 8:00';
      } else {
        statusDetail = 'Abre amanhã a partir das 7:35';
        nextOpening = 'Abre amanhã às 7:35';
      }
    }
  } else if (dayOfWeek === 6) {
    // Saturday
    if (totalMinutes >= saturdayOpenMinutes && totalMinutes < saturdayCloseMinutes) {
      isOpen = true;
      statusBadge = 'Aberto agora';
      statusDetail = 'Fecha hoje às 13:00';
      nextOpening = 'Horário especial de sábado';
    } else if (totalMinutes < saturdayOpenMinutes) {
      isOpen = false;
      statusBadge = 'Fechado agora';
      statusDetail = 'Abre hoje a partir das 8:00';
      nextOpening = 'Abre hoje às 8:00';
    } else {
      isOpen = false;
      statusBadge = 'Fechado agora';
      statusDetail = 'Abre segunda-feira a partir das 7:35';
      nextOpening = 'Abre segunda às 7:35';
    }
  } else {
    // Sunday
    isOpen = false;
    statusBadge = 'Fechado agora';
    statusDetail = 'Abre amanhã (segunda-feira) a partir das 7:35';
    nextOpening = 'Abre amanhã às 7:35';
  }

  return {
    isOpen,
    statusBadge,
    statusDetail,
    nextOpening,
    formattedTime,
    formattedTimeShort,
    currentWeekdayName,
  };
}

export default function RealtimeStatusBadge({ compact = false }: { compact?: boolean }) {
  const { isOpen, statusBadge, statusDetail, formattedTime, currentWeekdayName } = useClinicSchedule();

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200 shadow-sm text-xs font-semibold">
        <span className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              isOpen ? 'bg-emerald-400' : 'bg-red-400'
            }`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              isOpen ? 'bg-emerald-600' : 'bg-red-600'
            }`}
          />
        </span>
        <span className={isOpen ? 'text-emerald-700' : 'text-red-700'}>
          {statusBadge} · {statusDetail}
        </span>
        <span className="text-slate-400">|</span>
        <span className="text-slate-600 font-mono">{formattedTime}</span>
      </div>
    );
  }

  return (
    <div className="location-realtime-box" id="realtime-status-container">
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-3.5 w-3.5 items-center justify-center">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              isOpen ? 'bg-emerald-400' : 'bg-red-400'
            }`}
          />
          <span
            className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
              isOpen ? 'bg-emerald-600' : 'bg-red-600'
            }`}
          />
        </span>

        <div className="flex flex-wrap items-baseline gap-x-2">
          <strong className={`text-[0.95rem] ${isOpen ? 'text-emerald-700' : 'text-red-600'}`}>
            {statusBadge}
          </strong>
          <span className="text-slate-700 text-sm font-medium">· {statusDetail}</span>
        </div>
      </div>

      <div className="mt-1.5 flex items-center gap-2 text-xs text-slate-500 font-medium bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1.5">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-600 animate-spin-slow"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>
          {currentWeekdayName}, horário de Brasília: <strong className="font-mono text-slate-800">{formattedTime}</strong>
        </span>
      </div>
    </div>
  );
}
