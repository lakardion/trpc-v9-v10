import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data: hello } = trpc.useQuery([
    "example.hello",
    { text: "from tRPC" },
  ]);
  const { data: v10Data } = trpc.proxy.test.useQuery();

  const somethingThatRequiresDate = (dateInput?: Date) => dateInput?.toString();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3">
      <div className="flex flex-col">
        <p>Typeof hello.myDate</p>
        <p>{typeof hello?.myDate}</p>
      </div>
      <div className="flex flex-col">
        <p>String date</p>
        {/* TS error in below line. myDate is of type date but TS thinks it is string */}
        <p>{somethingThatRequiresDate(hello?.myDate)}</p>
      </div>
      <p>{v10Data}</p>
    </div>
  );
};

export default Home;
