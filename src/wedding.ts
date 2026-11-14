/** Edit the ceremony clock time, bank details, and photo paths before sharing. */
export const wedding = {
  partnerOne: "Thaw",
  partnerTwo: "Thwe",
  dateISO: "2026-12-30T23:59:59+07:00",
  dateLine: "Wednesday, 30 December 2026",
  dateDisplay: "30 December 2026",
  dateNumeric: "30.12.2026",
  timeLine: "8:30 AM – 1:00 PM",
  venueName: "No. 24 The Glass House",
  city: "Bangkok, Thailand",
  address: "24, 1 Borommaratchachonnani Rd, Khwaeng Chim Phli, Taling Chan, Bangkok 10170",
  mapUrl: "https://maps.app.goo.gl/RcQhJiZdD2N8EpVg9",
  phone: "+66 061 896 0283",
  phoneHref: "tel:+66618960283",
  dressCode: "Dress comfortably",
  message:
    "Thaw and Thwe request the pleasure of your company as they celebrate their marriage and begin this new chapter, surrounded by the people they love most.",
  locationLead:
    "Set in a quiet corner of Bangkok, No. 24 The Glass House will be the setting for our celebration, filled with morning light and surrounded by the gardens of the city.",
  locationNote:
    "We recommend arriving a little early to settle 9:30 AM and main ceremony starts at 10:00 AM with your appreciated presence.",
  transport: {
    nearby:
      "The Glass House is closer to Taling Chan station on the Red Line than to the other stops nearby. Taling Chan is not the most convenient way to arrive.",
    advice:
      "Please go to Bang Wa BTS Station, then call a taxi — Grab or Bolt — from the station to the venue.",
  },
  photos: {
    cover: "/images/couple.jpeg",
    venue: "/images/venue.jpeg",
    dressCode: "/images/dress-code.jpeg",
  },
  schedule: [
    {
      time: "9:00 AM",
      title: "Welcome",
      detail: "Please arrive by 9:15 AM at least. A welcome drink and coffee as guests arrive. ",
      icon: "drink",
    },
    {
      time: "10:00 AM",
      title: "Ceremony",
      detail: "Our marriage ceremony, held in the Myanmar traditional way. Please take your seats by 9:40 AM.",
      icon: "ceremony",
    },
    {
      time: "10:50 AM",
      title: "Photo Session or activities",
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
    note: "Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, a contribution towards our upcoming relocation and new chapter abroad would be warmly appreciated, as we are unable to carry physical items with us.",
    transferNote:
      "A transfer is optional, if that is easier for you. Please write your name on the note field. \"Name + Wedding Gift\".",
    accounts: [
      {
        audience: "People in Thailand",
        bank: "Siam Commercial Bank (SCB)",
        accountName: "MISTER THAW ZIN MYO",
        detailLabel: "Account number",
        detail: "032-492961-9",
        copyLabel: "Copy account number",
      },
      {
        audience: "People from Myanmar",
        bank: "KPay",
        accountName: "Thaw Zi Myo",
        detailLabel: "Phone number",
        detail: "099 696 466 04",
        copyLabel: "Copy phone number",
      },
    ],
  },
  rsvpBy: "Please reply by 10 December.",
  rsvpEmail: "thawzinmyo777@gmail.com",
  musicSrc: "/audio/Alex_Warren_Ordinary_Wedding_Version.mp3",
};
