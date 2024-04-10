import { InMemoryCache } from 'apollo-cache-inmemory';
import Apollo from 'apollo-boost';

const cache = new InMemoryCache();

export default new Apollo({
  uri: process.env.REACT_APP_APOLLO,
  cache,
});
