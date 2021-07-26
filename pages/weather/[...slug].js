import Link from "next/link";
import { useRouter } from "next/router";
import { useSoilWaterData } from "hooks/useSoilWaterData";

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  const { loading, data } = useSoilWaterData({
    date: "2021-07-01",
    lat: "5.603717",
    long: "-0.186964",
  });

  console.log("☠️ ", data);

  return (
    <>
      <p>Page: {slug}</p>
      <p>Status: {loading ? "Loading..." : !data ? "Empty!" : "Done!"}</p>
      <Link href="/">
        <a>Back HOME</a>
      </Link>
    </>
  );
}
