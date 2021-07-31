import Link from "next/link";
import styled from "styled-components";
import { rem, darken } from "polished";
import Page from "@components/page";

const Wrapper = styled.div`
  a {
    color: var(--pink);
    text-decoration: none;
    transition-duration: 0.3s;

    &:hover {
      color: ${darken(0.1, "#A400C9")};
    }
  }

  > div {
    a {
      display: inline-block;
      border-radius: 10px;
      background-color: var(--pink);
      width: ${rem("100px")};
      padding: ${rem("5px")} ${rem("10px")};
      text-align: center;
      font-size: 1.75rem;
      color: var(--light);

      &:not(:last-child) {
        margin-right: ${rem("15px")};
      }

      &:hover {
        background-color: ${darken(0.1, "#A400C9")};
      }
    }
  }
`;

export default function Home() {
  return (
    <Page>
      <Wrapper>
        <p>
          <strong>K|Dash</strong> is a dashboard that shows our forecasts in an
          easy-to-understand way for local farmers and stakeholders based on
          weather balloon data.
        </p>
        <p>
          The <strong>Kanda Weather Group</strong> is refining a weather balloon
          (also known as radiosonde) IoT technology product that collects data
          and uses Machine Learning to make a simple 12-hour rain forecast. They
          are 80% cheaper than traditional radiosondes and can be set up
          anywhere on earth.
        </p>

        <p>For now, this dashboard supports the locations below:</p>

        <div>
          <Link href="/weather/ghana/accra">
            <a>Accra</a>
          </Link>
          <Link href="/weather/nigeria/uyo">
            <a>Uyo</a>
          </Link>
        </div>

        <p>
          For more informations, please visite this{" "}
          <strong>
            <a
              href="https://kandaweather.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </a>
          </strong>
          .
        </p>
      </Wrapper>
    </Page>
  );
}
