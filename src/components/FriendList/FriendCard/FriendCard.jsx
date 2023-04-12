import PropTypes from 'prop-types';
import { CardContainer, FlagIsOnline, Avatar, Name } from './FriendCard.styled';

export const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <CardContainer>
      <FlagIsOnline isOnline={isOnline} />
      <Avatar className="img" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </CardContainer>
  );
};

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
