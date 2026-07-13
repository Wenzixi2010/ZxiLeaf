import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Analytics } from '@vercel/analytics/react'
import Layout from '@theme/Layout';
import IndexProjects from '@site/src/components/Projects';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">Zxi's Leaf 服务器教程文档</h1>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Home">
      <HomepageHeader />
      <main>
        <IndexProjects />
      </main>
      <Analytics />
    </Layout>
  );
}
