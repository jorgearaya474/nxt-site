import React from 'react';
import md from 'markdown-it';
import { NextPage } from 'next';
import { Calendar, Tag } from 'react-feather';
import Head from 'next/head'
import { SinglePost } from '../../interfaces';
import Link from 'next/link';

const SinglePostView: React.FC<SinglePost> = ({ title, excerpt, date, content }) => {
  return (
    <div className='content py-8'>
      <Head>
        <title>{title} | jorgearaya.dev</title>
        <meta name='description' content={excerpt} />
      </Head>
      <div className='single-post flex justify-center items-start'>
        <div className='container'>
          <article className='post prose'>
            <div className='meta-data text-slate-400'>
              <span className='mr-3'>
                <Calendar className='inline-flex mb-1 mr-2' size='18' />
                {date}
              </span>
            </div>
            <div
              className='content'
              dangerouslySetInnerHTML={{ __html: md().render(content) }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}

export default SinglePostView;