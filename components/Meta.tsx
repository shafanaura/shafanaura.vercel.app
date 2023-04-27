import Head from 'next/head'
import React from 'react'

const Meta = () => {
  return (
    <Head>
      <title>Shafa - Frontend Web Developer</title>
      <meta
        name="description"
        content="Hi, I'm Shafa, a frontend developer who specializes in creating visually stunning interfaces"
      />
      <meta
        name="keywords"
        content="Frontend web developer, ReactJS, Next.js, Chakra UI, TypeScript"
      />
      <meta name="author" content="Shafa Naura Priesha Ardhynindya" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Frontend Web Developer" />
      <meta
        property="og:description"
        content="Hi, I'm Shafa, a frontend developer who specializes in creating visually stunning interfaces"
      />
      <meta property="og:image" content="/images/thumbnail.png" />
      <meta property="og:url" content="http://shafanaura.com/" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Frontend Web Developer" />
      <meta
        property="twitter:description"
        content="Hi, I'm Shafa, a frontend developer who specializes in creating visually stunning interfaces"
      />
      <meta property="twitter:image" content="/images/thumbnail.png" />
    </Head>
  )
}

export default Meta
