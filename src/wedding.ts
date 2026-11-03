/** Edit the ceremony clock time, bank details, and photo paths before sharing. */
export const wedding = {
  partnerOne: "Thaw",
  partnerTwo: "Thwe",
  dateISO: "2026-12-30T07:00:00+07:00",
  dateLine: "Wednesday, 30 December 2026",
  dateNumeric: "30.12.2026",
  timeLine: "7:00 AM – 2:00 PM",
  venueName: "No.24 The Glass House",
  mapUrl: "https://maps.app.goo.gl/RcQhJiZdD2N8EpVg9",
  dressCode: "Myanmar Traditional",
  message:
    "Thaw and Thwe request the pleasure of your company as they celebrate their marriage and begin this new chapter, surrounded by the people they love most.",
  locationNote:
    "The morning begins with a welcome drink and coffee. Lunch is a Thai buffet, and the celebration closes at 2:00 PM.",
  photos: {
    cover: "/images/couple.png",
    venue: "/images/venue.png",
    dressCode: "/images/dress-code.png",
  },
  schedule: [
    {
      time: "7:00 AM",
      title: "Welcome",
      detail: "A welcome drink and coffee as guests arrive.",
      icon: "drink",
    },
    {
      time: "",
      title: "Ceremony",
      detail: "Our marriage ceremony, held in the Myanmar traditional way.",
      icon: "rings",
    },
    {
      time: "Lunch",
      title: "Thai buffet",
      detail: "A shared buffet lunch to continue the celebration.",
      icon: "meal",
    },
    {
      time: "2:00 PM",
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
