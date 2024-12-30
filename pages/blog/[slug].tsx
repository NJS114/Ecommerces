import { useRouter } from 'next/router';
import React from 'react';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Article de blog : {slug}</h1>
      <p>Contenu de l'article {slug}.</p>
    </div>
  );
};

export default BlogPost;

