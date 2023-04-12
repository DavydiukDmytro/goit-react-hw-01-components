import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 300px;
  height: 'auto';
  border: 1px solid var(--color-border);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 5px 5px var(--color-secondary-bg);
`;

export const Description = styled.div`
  padding: 30px 0;
  text-align: center;
`;
export const ImgAvatar = styled.img`
  width: 40%;
  border-radius: 50%;
  border: 1px solid var(--color-black);
  margin-left: auto;
  margin-right: auto;
`;
export const Name = styled.p`
  font-family: 'Padauk', sans-serif;
  color: var(--color-primary-text);
  margin-top: 20px;
  font-weight: 700;
  font-size: 24px;
`;
export const UserData = styled.p`
  color: var(--color-secondary-text);
  font-weight: 500;
  font-size: 16px;
  margin-top: 8px;
`;

export const StatsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StatsItem = styled.li`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  background-color: var(--color-secondary-bg);
  border: 1px solid var(--color-border);
`;

export const StatsTitle = styled.span`
  color: #ab9f9f;
  font-weight: 500;
  font-size: 14px;
`;
export const StatsValue = styled.span`
  font-weight: 600;
  font-size: 16px;
`;
