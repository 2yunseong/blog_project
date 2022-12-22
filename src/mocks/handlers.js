import { rest } from 'msw';
import recentPosts from './data/recentPosts';
import profiles from './data/profiles';

export const handlers = [
  // 최신 글 가져오기
  rest.get('/posts/recent', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(recentPosts));
  }),
  // user 프로필 가져오기
  rest.get('/user/profile', (req, res, ctx) => {
    const userId = req.url.searchParams.get('id');

    const profile = profiles.filter((profile) => profile.id == userId)[0];
    return res(ctx.status(200), ctx.json(profile));
  }),

  rest.get('/post', (req, res, ctx) => {
    const postId = req.url.searchParams.get('page');
  }),

  rest.get('/comment', (req, res, ctx) => {}),

  rest.post('/comment', (req, res, ctx) => {}),

  rest.post('/post', (req, res, ctx) => {}),
];
