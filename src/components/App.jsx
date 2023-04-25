import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { Friends } from 'components/Friends/Friends';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

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
        stats={data}
        title="Upload stats" />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
