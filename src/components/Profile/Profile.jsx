import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  ImgAvatar,
  Name,
  UserData,
  StatsContainer,
  StatsItem,
  StatsTitle,
  StatsValue,
} from './Profile.styled';
import { formattedNumber } from 'utils/formattedNumber';

export const Profile = ({
  userName,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileContainer>
      <Description>
        <ImgAvatar className="img" src={avatar} alt="User avatar" />
        <Name>{userName}</Name>
        <UserData>@{tag}</UserData>
        <UserData>{location}</UserData>
      </Description>

      <StatsContainer>
        <StatsItem>
          <StatsTitle>Followers</StatsTitle>
          <StatsValue>{formattedNumber(followers)}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsTitle>Views</StatsTitle>
          <StatsValue>{formattedNumber(views)}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsTitle>Likes</StatsTitle>
          <StatsValue>{formattedNumber(likes)}</StatsValue>
        </StatsItem>
      </StatsContainer>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
