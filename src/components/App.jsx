import user from '../users/user.json';
import data from '../users/data.json';
import friends from '../users/friends.json';
import transactions from '../users/transactions.json';

import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/Friends';
import { TransactionHistory } from './Transaction/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> 
    
      <Statistics
        title="Upload stats"
        stats={data}
      />
      
      <FriendList
        friends={friends}
      />
      
      <TransactionHistory
        items={transactions}
      />
    </div>
  );
};