import { Container, ContainerProfileAndFriendList } from './App.styled';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory';

import userData from 'data/user.json';
import statisticsData from 'data/data.json';
import friends from 'data/friends.json';
import transaction from 'data/transactions.json';

const { username, tag, location, avatar, stats } = userData;

export const App = () => {
  return (
    <Container>
      <ContainerProfileAndFriendList>
        <Profile
          userName={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
        <FriendList friends={friends} />
      </ContainerProfileAndFriendList>
      <Statistics stats={statisticsData} />
      <Statistics title="Upload stats" stats={statisticsData} />
      <TransactionHistory items={transaction} />
    </Container>
  );
};
