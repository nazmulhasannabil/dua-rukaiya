import duas from "../dua.json";
import { HiOutlineStar } from "react-icons/hi";
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {duas.map((dua) => (
        <div key={dua.id} className="w-full p-17 pt-4 border-b border-b-gray-200">
          <h1 className="font-poppins font-semibold text-xl leading-10 flex items-center gap-1 text-[#417360]">
            <HiOutlineStar className=" w-12" />
            {dua.id}. {dua.title}
          </h1>
          <button className="px-2 py-1 rounded border-0 text-xs text-[#417360] border-[#417360] bg-[#EEF6EB] hover:bg-[#d7ebd0]">{dua.category}</button>
          <p className="text-right py-4 text-4xl leading-10">{dua.arabic}</p>
          <p><span className="text-[#417360] font-bold text-lg leading-10">{dua.title} English Translation <br /></span> {dua.transliteration}</p>
          <p> <span className="text-[#417360] font-bold  text-lg leading-10"> Translation <br/></span>{dua.translation}</p>

        </div>
      ))}
    </div>
  )
}

