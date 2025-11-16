import duas from "../dua.json";
import { HiOutlineStar } from "react-icons/hi";
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {duas.map((dua) => (
        <div key={dua.id} className="w-full py-4 px-2 sm:px-4 border-b border-b-gray-200">
          <h1 className="font-poppins font-semibold text-lg sm:text-xl leading-7 sm:leading-10 flex items-center gap-1 text-[#417360]">
            <HiOutlineStar className="w-6 h-6 sm:w-12 sm:h-12" />
            <span className="text-base sm:text-xl">{dua.id}. {dua.title}</span>
          </h1>
          <button className="mt-2 px-2 py-1 rounded border-0 text-xs text-[#417360] border-[#417360] bg-[#EEF6EB] hover:bg-[#d7ebd0]">{dua.category}</button>
          <p className="text-right py-4 text-2xl sm:text-4xl leading-8 sm:leading-10">{dua.arabic}</p>
          <p className="mb-2"><span className="text-[#417360] font-bold text-base sm:text-lg leading-7 sm:leading-10">{dua.title} English Translation <br /></span> {dua.transliteration}</p>
          <p> <span className="text-[#417360] font-bold text-base sm:text-lg leading-7 sm:leading-10"> Translation <br/></span>{dua.translation}</p>
        </div>
      ))}
    </div>
  )
}

