export interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
  leader?: string;
}

export interface DaySchedule {
  day: string;
  items: ScheduleItem[];
}

export const weeklySchedule: DaySchedule[] = [
  {
    day: "Monday",
    items: [
      {
        time: "5:00 PM",
        title: "Choir meeting",
        description: "Choir practice",
        leader: "Ms. Nakimera Elizabeth & Mr. Wasswa Stephen"
      }
    ]
  },
  {
    day: "Tuesday",
    items: [
      {
        time: "5:00 PM",
        title: "New ministers Orientation",
        description: "Orientation class",
        leader: "Pr. Ruth"
      },
      {
        time: "7:00 PM",
        title: "Men’s gathering",
        description: "SACCO and Prayer",
        leader: "Pr. Sam and Mr. Ian"
      }
    ]
  },
  {
    day: "Wednesday",
    items: [
      {
        time: "5:00 PM",
        title: "Discipleship class",
        description: "Bible teaching",
        leader: "Pr. Ruth"
      }
    ]
  },
  {
    day: "Thursday",
    items: [
      {
        time: "5:00 PM",
        title: "Prayer alter",
        description: "Deliverance class and prayer"
      }
    ]
  },
  {
    day: "Friday",
    items: [
      {
        time: "6:00 PM",
        title: "Prayer and intercession",
        description: "Praying for church needs",
        leader: "Pr. Victoria"
      }
    ]
  },
  {
    day: "Saturday",
    items: [
      {
        time: "8:00 AM",
        title: "Ushers gathering",
        description: "Cleaning the church",
        leader: "Mr. Ssekasi Moses"
      },
      {
        time: "5:00 PM",
        title: "Intercessors’ meeting",
        description: "Intercession",
        leader: "Pr. Victoria"
      },
      {
        time: "5:00 PM",
        title: "Choir meeting",
        description: "Choir rehearsals",
        leader: "Ms. Nakimera Elizabeth & Mr. Wasswa Stephen"
      }
    ]
  },
  {
    day: "Sunday",
    items: [
      {
        time: "8:00 AM",
        title: "Ministers’ service",
        description: "Prayer"
      },
      {
        time: "9:00 AM",
        title: "Luganda service",
        description: "Praise, worship and hearing the word",
        leader: ""
      },
      {
        time: "11:00 PM",
        title: "English service",
        description: "Praise, worship and hearing the word",
        leader: ""
      }
    ]
  }
];

export const specialSundays = [
  { week: "1st Sunday of the month", theme: "Holy communion" },
  { week: "3rd Sunday of the month", theme: "Feast Sunday" },
  { week: "4th Sunday of the month", theme: "Women/Men Sunday" }
];

const serviceDaysOrder = ["Sunday", "Wednesday", "Thursday", "Friday"];
export const publicServiceDays = serviceDaysOrder
  .map(dayName => weeklySchedule.find(d => d.day === dayName))
  .filter((d): d is DaySchedule => !!d);

