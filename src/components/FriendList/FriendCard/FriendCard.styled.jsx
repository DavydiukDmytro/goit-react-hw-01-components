import styled from '@emotion/styled';

export const CardContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 3px 2px 2px var(--color-secondary-bg);
`;

export const FlagIsOnline = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? '#3BE149' : '#F44343')};
`;

export const Avatar = styled.img`
  margin: 0 10px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  overflow: hidden;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
