import { rest } from 'msw';
import profiles from './data/profiles';
import posts from './data/posts';
import comments from './data/comments';

export const handlers = [
  // 최신 글 가져오기
  rest.get('/posts/recent', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts));
  }),
  // user 프로필 가져오기
  rest.get('/user/profile', (req, res, ctx) => {
    const userId = req.url.searchParams.get('id');

    const profile = profiles.filter((profile) => profile.id == userId)[0];
    return res(ctx.status(200), ctx.json(profile));
  }),

  rest.get('/post', (req, res, ctx) => {
    const postId = req.url.searchParams.get('page');
    const post = posts.filter((p) => p.id == postId)[0];

    console.log(post);
    return res(ctx.status(200), ctx.json(post));
  }),

  rest.post('/post', (req, res, ctx) => {
    const resDto = {
      id: posts.length + 1,
      ...req.body,
    };
    comments.push({
      id: posts.length + 1,
      comment: [],
    });
    console.log(resDto);
    posts.push(resDto);

    return res(ctx.status(200));
  }),

  rest.get('/comment', (req, res, ctx) => {
    const pageId = req.url.searchParams.get('page');
    const commentList = comments.filter((c) => c.id == pageId)[0].comment;
    return res(ctx.status(200), ctx.json(commentList));
  }),

  rest.post('/comment', (req, res, ctx) => {
    const pageId = req.url.searchParams.get('page');
    const commentList = comments.filter((c) => c.id == pageId)[0].comment;
    commentList.push({
      cid: commentList.length + 1,
      ...req.body,
    });
    return res(ctx.status(200));
  }),
];
