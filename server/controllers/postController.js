const { initContentful } = '../../lib/contentful';

exports.getPosts = async () => {
  const client = initContentful(process.env);
  const data = await client.getEntries({
    'content_type': '2wKn6yEnZewu2SCCkus4as'
  });

  return res.json(data);
};
