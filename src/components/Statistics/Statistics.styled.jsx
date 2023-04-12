import styled from '@emotion/styled';

export const StatContainer = styled.section`
  width: 75%;
  margin: 0 auto;
  text-align: center;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 5px 5px var(--color-secondary-bg);
  margin-bottom: 45px;
`;

export const StatTitle = styled.h2`
  padding: 15px 0px;
  color: var(--color-secondary-text);
  font-weight: 500;
  font-size: 25px;
`;

export const StatList = styled.ul`
  display: flex;
`;
