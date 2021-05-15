import { Warrior } from 'src/warriors/models/warrior.model';
import { Author } from '../authors/models/author.model';
import { Post } from '../authors/models/post.model';

export const posts: Post[] = [
  {
    id: 1,
    title: 'post title',
    votes: 100,
  },
];

export const authors: Author[] = [
  {
    id: 1,
    firstName: 'Dhananjay',
    lastName: 'Jadhav',
    posts: posts,
  },
];

export const warrios: Warrior[] = [
  {
    id: 1,
    name: 'test-warrior',
    level: 10,
  },
];
