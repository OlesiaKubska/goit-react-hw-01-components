import user from 'users/user.json';
import data from 'users/data.json';
import friends from 'users/friends.json';
import transactions from 'users/transactions.json';

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/Friends';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import { Container } from '../Container/Container';

export const App = () => {
  return (
    <Container width={1200}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> 
    
      <Statistics
        title="Upload stats"stats={data}
      />
      <Statistics stats={data} />
      
      <FriendList
        friends={friends}
      />
      
      <TransactionHistory
        items={transactions}
      />
    </Container>
  );
};