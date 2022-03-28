export default function durationToHours (time) {
  const mins = time % 60;
  const hours = (time - mins) / 60;

  if (mins === 0) {
    return hours + 'ч ';
  }
  else if (hours === 0) {
    return mins + 'м';
  }
  else {
    return hours + 'ч ' + mins + 'м';
  }
}
