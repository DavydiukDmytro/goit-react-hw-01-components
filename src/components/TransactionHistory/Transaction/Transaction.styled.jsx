import styled from '@emotion/styled';

export const RowTable = styled.tr`
  background-color: var(--color-primary-bg);

  &:nth-of-type(odd) {
    background-color: var(--color-secondary-bg);
  }
`;
export const Cell = styled.td`
  color: var(--color-primary-text);
  font-size: 20px;
  text-align: center;
`;
