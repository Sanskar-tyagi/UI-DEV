import Eq from "./Eq";

export default function CTA() {
  const data = {
    inputs: [
      "People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.",
      " They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.",
    ],
  };
  return (
    <div>
      <Eq data={data} headings={"Eqig"}></Eq>
    </div>
  );
}
