import Head from 'next/head'
import React from 'react'

const Meta = () => {
  return (
    <Head>
      <title>Shafa Naura - Frontend Web Developer</title>
      <meta
        name="description"
        content="a Front-End Web Developer who specialize in crafting flawless,
        user-friendly websites that exceed expectations. With an eye for
        detail and a passion for excellence, I bring design concepts to life.
        Currently, I take on project-based work through upwork"
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
        content="a Front-End Web Developer who specialize in crafting flawless,
          user-friendly websites that exceed expectations. With an eye for
          detail and a passion for excellence, I bring design concepts to life.
          Currently, I take on project-based work through upwork"
      />
      <meta property="og:image" content="/images/thumbnail.png" />
      <meta property="og:url" content="http://shafanaura.com/" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Frontend Web Developer" />
      <meta
        property="twitter:description"
        content="a Front-End Web Developer who specialize in crafting flawless,
          user-friendly websites that exceed expectations. With an eye for
          detail and a passion for excellence, I bring design concepts to life.
          Currently, I take on project-based work through upwork"
      />
      <meta property="twitter:image" content="/images/thumbnail.png" />
    </Head>
  )
}

export default Meta
