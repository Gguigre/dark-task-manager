import { padStart } from 'lodash';

export const formatDuration = ({
  hours,
  minutes,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return `${padStart(String(hours), 2, '0')}:${padStart(String(minutes), 2, '0')}:${padStart(
    String(seconds),
    2,
    '0'
  )}`;
};
