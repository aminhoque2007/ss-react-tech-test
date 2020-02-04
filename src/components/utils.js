export const getFlightTime = dateStr => {
  const parsedDate = new Date(dateStr);
  const hours = (parsedDate.getHours() < 10 ? '0' : '') + parsedDate.getHours();
  const minutes =
    (parsedDate.getMinutes() < 10 ? '0' : '') + parsedDate.getMinutes();
  return `${hours}:${minutes}`;
};

export const getHoursMins = mins => {
  const hours = mins / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours}h ${rminutes}`;
};

export const getStops = stops => {
  if (stops === 0) {
    return 'Direct';
  } else if (stops === 1) {
    return '1 stop';
  } else {
    return `${stops} stops`;
  }
};
