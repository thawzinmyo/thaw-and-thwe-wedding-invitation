/** Edit the ceremony clock time, bank details, and photo paths before sharing. */
export const wedding = {
  partnerOne: "Thaw",
  partnerTwo: "Thwe",
  dateISO: "2026-12-30T07:00:00+07:00",
  dateLine: "Wednesday, 30 December 2026",
  dateDisplay: "30 December 2026",
  dateNumeric: "30.12.2026",
  timeLine: "8:30 AM – 1:00 PM",
  venueName: "No. 24 The Glass House",
  city: "Bangkok, Thailand",
  mapUrl: "https://maps.app.goo.gl/RcQhJiZdD2N8EpVg9",
  dressCode: "Formal Attire",
  message:
    "Thaw and Thwe request the pleasure of your company as they celebrate their marriage and begin this new chapter, surrounded by the people they love most.",
  locationLead:
    "Set in a quiet corner of Bangkok, No. 24 The Glass House will be the setting for our celebration, filled with morning light and surrounded by the gardens of the city.",
  locationNote:
    "We recommend arriving a little early to settle in and enjoy the surroundings before the celebration begins.",
  transport: {
    nearby:
      "The Glass House is closer to Taling Chan station on the Red Line than to the other stops nearby. Taling Chan is not the most convenient way to arrive.",
    advice:
      "Please go to Bang Wa BTS Station, then call a taxi — Grab or Bolt — from the station to the venue.",
  },
  photos: {
    cover: "/images/couple.jpeg",
    venue: "/images/venue.jpeg",
    dressCode: "/images/dress-code.png",
  },
  schedule: [
    {
      time: "8:30 AM",
      title: "Welcome",
      detail: "A welcome drink and coffee as guests arrive.",
      icon: "drink",
    },
    {
      time: "9:30 AM",
      title: "Ceremony",
      detail: "Our marriage ceremony, held in the Myanmar traditional way.",
      icon: "ceremony",
    },
    {
      time: "10:30 AM",
      title: "Photo Session",
      detail: "A little time for photographs together.",
      icon: "photo",
    },
    {
      time: "11:00 AM",
      title: "Lunch",
      detail: "A Thai buffet.",
      icon: "meal",
    },
    {
      time: "1:00 PM",
      title: "Farewell",
      detail: "The celebration comes to a close.",
      icon: "farewell",
    },
  ],
  hotels: [] as { name: string; detail: string; code: string; dates: string }[],
  gift: {
    headline: "Your presence is our greatest gift.",
    note: "Should you wish to give a gift, you may do so by bank transfer.",
    bank: "Bank name",
    accountName: "Thaw and Thwe",
    accountNumber: "0000 0000 0000",
  },
  musicSrc: "/audio/background-song.mp3",
};
