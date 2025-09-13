import { PointerList } from "@/utils/staticData/homePage";

export default function Home() {
  return (
    <div className="items-center">
      <div className="font-bold items-center ml-20 font-size-[20]" style={{ marginTop: "-20px", fontSize: 36 }}><h1>Create Content 10x - faster with AI - in English or Hindi</h1></div>
      <ul className="ml-40" style={{ fontSize: 24 }}>
        {PointerList.map((pointer) =>
          <li key={pointer.id}>• {pointer.title}</li>)}
      </ul>

      <div className="flex items-center bg-gray-400 rounded-lg compact ml-40 center w-80">
        <button className="font-bold" style={{ fontSize: 40 }}>Try For Free</button>
      </div>

      {/**Boxes */}
      <div className="flex p-2 mt-10">
        {[1, 2, 3].map((box) =>
          <div key={box} className="ml-10 bg-gray-200 w-70 h-40"></div>)}
      </div>

    </div>
  );
}
