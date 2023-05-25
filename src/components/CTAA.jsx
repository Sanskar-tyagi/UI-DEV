import Eq from "./Eq";

export default function CTAA() {
  const data = {
    inputs: [
      "Not having your own emotions under control might be holding you back.",
      "Additionally, not understanding those of others stops you from being parent, friend you can",
    ],
  };
  return (
    <div>
      {" "}
      <Eq data={data} headings={"Be best with "} span={"CHAKRA UI"}></Eq>{" "}
    </div>
  );
}
