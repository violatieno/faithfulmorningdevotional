import { worshipSchedule } from '@/data/worship';

export const getCurrentMinutes = () => {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
};

export const isLiveNow = () => {
  const now = new Date();
  const currentDay = now.getDay();
  const currentMinutes = getCurrentMinutes();

  return worshipSchedule.some(session =>
    session.day.includes(currentDay) &&
    currentMinutes >= session.start &&
    currentMinutes < session.end
  );
};

export const getNextSession = () => {
  const now = new Date();
  const currentDay = now.getDay();
  const currentMinutes = getCurrentMinutes();

  const upcoming = worshipSchedule
    .flatMap(session =>
      session.day.map(d => {
        let dayOffset = (d - currentDay + 7) % 7;
        let totalMinutes = dayOffset * 1440 + session.start - currentMinutes;
        return { ...session, inMinutes: totalMinutes };
      })
    )
    .filter(session => session.inMinutes > 0)
    .sort((a, b) => a.inMinutes - b.inMinutes);

  return upcoming.length > 0 ? upcoming[0] : null;
};