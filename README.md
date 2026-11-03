# Thaw & Thwe — Wedding Invitation

A lace invitation for the wedding of Thaw and Thwe.

- **When:** Wednesday, 30 December 2026, 7:00 AM – 2:00 PM
- **Where:** No.24 The Glass House
- **Dress:** Myanmar traditional
- **Food:** welcome drink, coffee, and a Thai buffet lunch

Guests open a wax seal, then scroll through the countdown, map, schedule, dress code, gift details, and RSVP.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit the details

Names, the schedule, and the bank transfer live in [`src/wedding.ts`](src/wedding.ts). The ceremony does not have its own clock time yet, so that row is labeled “Ceremony” until you add one. Hotel cards stay hidden until you add entries to `hotels`.

## Photos

Photos live in `public/images/` as PNG files. Paths are set in `wedding.photos`:

```ts
photos: {
  cover: "/images/couple.jpeg",
  venue: "/images/venue.jpeg",
  dressCode: "/images/dress-code.jpeg",
}
```

Add a dress-code image at `public/images/dress-code.jpeg` and set that path when you have it. An optional song at `public/audio/background-song.mp3` plays after the seal opens.

The RSVP form thanks the guest in the browser. It does not send or store replies yet.
