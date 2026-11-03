import { frontmatter as f1 } from '../content/ch01.md';
import { frontmatter as f2 } from '../content/ch02.md';
import { frontmatter as f3 } from '../content/ch03.md';
import { frontmatter as f4 } from '../content/ch04.md';

export const chapters = [f1, f2, f3, f4].map((f) => ({
  num: f.num as string,
  slug: f.slug as string,
  kicker: f.kicker as string,
  title: f.title as string,
  role: f.role as string,
}));
