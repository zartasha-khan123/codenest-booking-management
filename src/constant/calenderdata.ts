// export interface TimeSlot {
//   morning: boolean
//   afternoon: boolean
//   evening: boolean
// }

// export interface MonthAvailability {
//   [day: number]: TimeSlot
// }

// export interface CalendarAvailability {
//   [month: number]: MonthAvailability
// }

// export const CALENDAR_AVAILABILITY: CalendarAvailability = {
//   4: { // May
//     1: { morning: false, afternoon: true, evening: true },
//     2: { morning: true, afternoon: true, evening: true },
//     3: { morning: false, afternoon: false, evening: true },
//     4: { morning: true, afternoon: true, evening: true },
//     5: { morning: false, afternoon: false, evening: false },
//     6: { morning: true, afternoon: true, evening: true },
//     7: { morning: true, afternoon: true, evening: true },
//     8: { morning: true, afternoon: true, evening: true },
//     9: { morning: true, afternoon: true, evening: true },
//     10: { morning: false, afternoon: false, evening: false },
//     11: { morning: true, afternoon: false, evening: true },
//     12: { morning: true, afternoon: true, evening: true },
//     13: { morning: true, afternoon: true, evening: true },
//     14: { morning: true, afternoon: false, evening: true },
//     15: { morning: false, afternoon: true, evening: true },
//     16: { morning: false, afternoon: false, evening: true },
//     17: { morning: false, afternoon: false, evening: true },
//     18: { morning: false, afternoon: false, evening: false },
//     19: { morning: true, afternoon: false, evening: true },
//     20: { morning: false, afternoon: false, evening: false },
//     21: { morning: false, afternoon: true, evening: true },
//     22: { morning: false, afternoon: true, evening: true },
//     23: { morning: false, afternoon: false, evening: true },
//     24: { morning: false, afternoon: false, evening: false },
//     25: { morning: false, afternoon: false, evening: false },
//     26: { morning: false, afternoon: false, evening: false },
//     27: { morning: false, afternoon: false, evening: false },
//     28: { morning: false, afternoon: false, evening: false },
//     29: { morning: false, afternoon: false, evening: false },
//     30: { morning: false, afternoon: false, evening: false },
//     31: { morning: false, afternoon: false, evening: false }
//   },
//   5: { // June
//     1: { morning: false, afternoon: false, evening: false },
//     2: { morning: false, afternoon: false, evening: false },
//     3: { morning: false, afternoon: false, evening: false },
//     4: { morning: false, afternoon: false, evening: false },
//     5: { morning: false, afternoon: false, evening: false },
//     6: { morning: false, afternoon: false, evening: false },
//     7: { morning: false, afternoon: false, evening: false },
//     8: { morning: false, afternoon: false, evening: false },
//     9: { morning: false, afternoon: false, evening: false },
//     10: { morning: false, afternoon: true, evening: true },
//     11: { morning: true, afternoon: true, evening: true },
//     12: { morning: false, afternoon: true, evening: true },
//     13: { morning: true, afternoon: true, evening: true },
//     14: { morning: false, afternoon: false, evening: true },
//     15: { morning: true, afternoon: true, evening: true },
//     16: { morning: true, afternoon: true, evening: true },
//     17: { morning: true, afternoon: true, evening: true },
//     18: { morning: false, afternoon: true, evening: true },
//     19: { morning: true, afternoon: true, evening: true },
//     20: { morning: true, afternoon: true, evening: true },
//     21: { morning: false, afternoon: false, evening: true },
//     22: { morning: true, afternoon: true, evening: true },
//     23: { morning: true, afternoon: true, evening: true },
//     24: { morning: true, afternoon: true, evening: true },
//     25: { morning: true, afternoon: true, evening: true },
//     26: { morning: true, afternoon: true, evening: true },
//     27: { morning: false, afternoon: true, evening: true },
//     28: { morning: false, afternoon: false, evening: true },
//     29: { morning: true, afternoon: true, evening: true },
//     30: { morning: true, afternoon: true, evening: true }
//   },
//   6: { // July
//     1: { morning: true, afternoon: true, evening: true },
//     2: { morning: false, afternoon: false, evening: true },
//     3: { morning: true, afternoon: true, evening: true },
//     4: { morning: false, afternoon: true, evening: true },
//     5: { morning: true, afternoon: true, evening: true },
//     6: { morning: true, afternoon: true, evening: true },
//     7: { morning: false, afternoon: false, evening: false },
//     8: { morning: true, afternoon: true, evening: true },
//     9: { morning: false, afternoon: false, evening: false },
//     10: { morning: true, afternoon: true, evening: true },
//     11: { morning: true, afternoon: true, evening: true },
//     12: { morning: true, afternoon: true, evening: true },
//     13: { morning: true, afternoon: true, evening: true },
//     14: { morning: false, afternoon: true, evening: true },
//     15: { morning: true, afternoon: true, evening: true },
//     16: { morning: true, afternoon: true, evening: true },
//     17: { morning: true, afternoon: true, evening: true },
//     18: { morning: true, afternoon: true, evening: true },
//     19: { morning: true, afternoon: true, evening: true },
//     20: { morning: true, afternoon: true, evening: true },
//     21: { morning: true, afternoon: true, evening: true },
//     22: { morning: true, afternoon: true, evening: true },
//     23: { morning: true, afternoon: true, evening: true },
//     24: { morning: true, afternoon: true, evening: true },
//     25: { morning: false, afternoon: false, evening: true },
//     26: { morning: true, afternoon: true, evening: true },
//     27: { morning: true, afternoon: true, evening: true },
//     28: { morning: true, afternoon: true, evening: true },
//     29: { morning: true, afternoon: true, evening: true },
//     30: { morning: true, afternoon: true, evening: true },
//     31: { morning: true, afternoon: true, evening: true }
//   }
// }

// export const MONTH_NAMES = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ]



// export const MONTH_NAMES = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// export const CALENDAR_AVAILABILITY: {
//   [month: number]: {
//     [day: number]: {
//       morning: boolean;
//       afternoon: boolean;
//       evening: boolean;
//     };
//   };
// } = {
//   6: {
//     2: { morning: true, afternoon: true, evening: false },
//     10: { morning: true, afternoon: false, evening: true },
//     13: { morning: true, afternoon: true, evening: true },
//   },
//   7: {
//     3: { morning: true, afternoon: false, evening: false },
//     24: { morning: true, afternoon: true, evening: false },
//   },
//   8: {
//     5: { morning: true, afternoon: false, evening: true },
//     14: { morning: true, afternoon: true, evening: true },
//   },
// };


// calendardata.ts

export const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const CALENDAR_AVAILABILITY: {
  [month: number]: {
    [day: number]: {
      morning: boolean;
      afternoon: boolean;
      evening: boolean;
    };
  };
} = {
  6: { // June
    2: { morning: false, afternoon: false, evening: true }, // 2 booked → 2 dots
    10: { morning: false, afternoon: false, evening: false }, // all booked → 3 dots
    13: { morning: true, afternoon: false, evening: false }, // 2 booked → 2 dots
  },
  7: { // July
    3: { morning: false, afternoon: false, evening: false }, // all booked → 3 dots
    24: { morning: false, afternoon: false, evening: true }, // 2 booked → 2 dots
  },
  8: { // August
    5: { morning: false, afternoon: false, evening: false }, // all booked → 3 dots
    14: { morning: false, afternoon: true, evening: false }, // 2 booked → 2 dots
  },
};
