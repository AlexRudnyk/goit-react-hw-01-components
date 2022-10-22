import { Container } from './container/Container';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import user from 'data/user.json';
import data from 'data/data.json';

export const App = () => {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title={'Upload stats'} stats={data} />
    </Container>
  );
};
