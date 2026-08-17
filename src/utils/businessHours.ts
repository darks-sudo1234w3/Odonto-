export interface BusinessStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
  badgeClass: string;
}

export function getRealTimeBusinessStatus(): BusinessStatus {
  const now = new Date();
  
  // Convert or get local day of week & hours (0 = Sunday, 1 = Monday, ... 6 = Saturday)
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;

  // Weekdays: 07:35 (455 min) to 18:00 (1080 min)
  const weekdayOpen = 7 * 60 + 35; // 7:35 AM = 455
  const weekdayClose = 18 * 60;    // 18:00 PM = 1080

  // Saturday: 08:00 (480 min) to 13:00 (780 min)
  const satOpen = 8 * 60;
  const satClose = 13 * 60;

  if (day >= 1 && day <= 5) {
    // Monday to Friday
    if (currentTime >= weekdayOpen && currentTime < weekdayClose) {
      return {
        isOpen: true,
        statusText: 'Aberto agora',
        subText: 'Atendimento até às 18:00',
        badgeClass: 'status-open',
      };
    } else if (currentTime < weekdayOpen) {
      return {
        isOpen: false,
        statusText: 'Fechado agora',
        subText: 'Abre hoje a partir das 07:35',
        badgeClass: 'status-closed',
      };
    } else {
      // After closing
      if (day === 5) {
        return {
          isOpen: false,
          statusText: 'Fechado agora',
          subText: 'Abre amanhã (sábado) a partir das 08:00',
          badgeClass: 'status-closed',
        };
      }
      return {
        isOpen: false,
        statusText: 'Fechado agora',
        subText: 'Abre amanhã a partir das 07:35',
        badgeClass: 'status-closed',
      };
    }
  } else if (day === 6) {
    // Saturday
    if (currentTime >= satOpen && currentTime < satClose) {
      return {
        isOpen: true,
        statusText: 'Aberto agora',
        subText: 'Atendimento até às 13:00',
        badgeClass: 'status-open',
      };
    } else if (currentTime < satOpen) {
      return {
        isOpen: false,
        statusText: 'Fechado agora',
        subText: 'Abre hoje a partir das 08:00',
        badgeClass: 'status-closed',
      };
    } else {
      return {
        isOpen: false,
        statusText: 'Fechado agora',
        subText: 'Abre segunda-feira a partir das 07:35',
        badgeClass: 'status-closed',
      };
    }
  } else {
    // Sunday
    return {
      isOpen: false,
      statusText: 'Fechado agora',
      subText: 'Abre amanhã (segunda-feira) a partir das 07:35',
      badgeClass: 'status-closed',
    };
  }
}
