export default function Head() {
  return (
    <>
      {/* Title and Meta */}
      <title>TWS - The Wall Survival</title>
      <meta
        name="description"
        content="Information about The Wall Survival [SRP] server"
      />
      <meta
        name="keywords"
        content="TWS, The Wall Survival, SRP, roleplay, server"
      />
      <meta name="author" content="TWS Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content="TWS - The Wall Survival" />
      <meta
        property="og:description"
        content="Information about The Wall Survival [SRP] server"
      />
      <meta property="og:url" content="https://countdown-tws.vercel.app" />
      <meta property="og:site_name" content="TWS" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:image"
        content="https://countdown-tws.vercel.app/images/og-image.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="The Wall Survival" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="TWS - The Wall Survival" />
      <meta
        name="twitter:description"
        content="Information about The Wall Survival [SRP] server"
      />
      <meta
        name="twitter:image"
        content="https://countdown-tws.vercel.app/images/og-image.png"
      />

      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </>
  );
}
