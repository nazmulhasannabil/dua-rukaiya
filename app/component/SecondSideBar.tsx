import { FiSearch } from "react-icons/fi";
import duas from "../../dua.json";

const SecondSideBar = () => {
    return (
        <aside className="h-screen hidden md:block overflow-y-auto py-2 px-4 mt-16 border-r border-gray-200">
            <div className="sticky top-0 bg-white pb-2">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-[#EEF6EB] w-full px-4 py-2 rounded-full focus:outline-none"
                    />
                    <FiSearch className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
            </div>

            <div className="overflow-y-auto">
                <ul className="mt-4 space-y-2">
                    {duas.map((dua) => (
                        <li
                            key={dua.id}
                            className="p-2 flex items-center bg-[#FAFFFA] hover:bg-[#EEF6EB] rounded-3xl cursor-pointer"
                        >
                            <div className="font-semibold text-sm text-gray-600 h-8 w-8 flex items-center justify-center bg-[#d8e6d2] rounded-full mr-2">
                                {dua.id}
                            </div>
                            <div className="truncate">
                                {dua.title}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default SecondSideBar