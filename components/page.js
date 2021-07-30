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

  return (
    <>
      <Head>
        <title>K|Dash — Kanda Weather Group</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Wrapper>{children}</Wrapper>
    </>
  );
}
