import styled from 'styled-components';

import { useAppSelector } from '../../../../store/store';

import { convertTimeFromSecondsToTimeCode } from '../../../utils/helpers';

const times = {
  w: {
    color: 'var(--color-gray-900)',
    backgroundColor: 'var(--color-gray-400)',
    gridArea: 'timeWhite',
  },
  b: {
    color: 'var(--color-gray-400)',
    backgroundColor: 'var(--color-gray-900)',
    gridArea: 'timeBlack',
  },
};

function Time({ type }: { type: 'w' | 'b' }) {
  const { white, black } = useAppSelector(state => state.timer.time);
  const time = convertTimeFromSecondsToTimeCode(type === 'w' ? white : black);

  const style = times[type];

  return <Wrapper style={style}>{time}</Wrapper>;
}

const Wrapper = styled.div`
  padding: 12px 16px;
  width: fit-content;
  height: fit-content;
  border-radius: 3px;
  font-weight: 600;
  font-size: 1.5rem;

  transform: var(--sideTransform);
`;

export default Time;
