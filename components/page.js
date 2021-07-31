import Head from "next/head";
import styled from "styled-components";
import { rem } from "polished";

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: ${rem("800px")};
  padding: 0 ${rem("15px")};
`;

export default function Page(props) {
  const { children } = props;

  const title = "K|Dash — Kanda Weather Group";
  const shortTitle = "K|Dash";
  const description =
    "A dashboard that shows our forecasts in an easy-to-understand way for local farmers and stakeholders based on weather balloon data.";

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>{title}</title>
        {/* <link rel="shortcut icon" type="image/jpg" href="/favicon.ico" /> */}
        {/* <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        /> */}
        {/* <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        /> */}
        {/* <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        /> */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content={description} />
        <meta name="keywords" content="Keywords" />
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content="https://k-dash.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/k-dash-preview.png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="672" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@henrikemacedo" />
        <meta name="twitter:title" content={title} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />
        <meta name="twitter:image" content="/k-dash-preview.png" />
        <meta name="theme-color" content="red" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={shortTitle} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>

      <Wrapper>{children}</Wrapper>
    </>
  );
}
