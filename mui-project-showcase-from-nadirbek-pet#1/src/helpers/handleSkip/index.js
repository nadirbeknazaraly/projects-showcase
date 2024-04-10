import { MIN_LENGTH } from './constants';

export default (text) => !text || text.length < MIN_LENGTH;
