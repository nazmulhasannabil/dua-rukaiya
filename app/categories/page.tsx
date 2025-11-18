import React from "react";
import duas from "../../dua.json";
import { FaPray } from "react-icons/fa";

interface Dua {
  id: number;
  category: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
}

// Get unique categories
const getUniqueCategories = () => {
  const categories = [...new Set(duas.map(dua => dua.category))];
  return categories;
};

// Group duas by categoryn
const groupDuasByCategory = () => {
  const grouped: { [key: string]: Dua[] } = {};
  duas.forEach(dua => {
    if (!grouped[dua.category]) {
      grouped[dua.category] = [];
    }
    grouped[dua.category].push(dua);
  });
  return grouped;
};

export default function CategoryPage() {
  const categories = getUniqueCategories();
  const groupedDuas = groupDuasByCategory();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-[#282E29] mb-6">Categories</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="bg-linear-to-r from-[#417360] to-[#3a6655] p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-[#7CB49A]  -mt-8 -mr-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-[#7CB49A] -mb-12 -ml-12"></div>
              <div className="relative z-10">
                <h2 className="text-lg font-semibold text-white flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <FaPray className="text-[#EEF6EB]" />
                    <span>{category}</span>
                  </span>
                  <span className="bg-[#7CB49A] bg-opacity-20 rounded-full px-2 py-1 text-xs flex items-center gap-1">
                    <span>{groupedDuas[category].length}</span>
                  </span>
                </h2>
                <p className="text-[#EEF6EB] text-sm mt-1 flex items-center">
                  <span>Dua{groupedDuas[category].length > 1 ? 's' : ''}</span>
                </p>
              </div>
            </div>
            {/* <div className="p-4 bg-[#f8faf8]">
              <div className="space-y-3">
                {groupedDuas[category].slice(0, 3).map((dua: Dua) => (
                  <div key={dua.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0 hover:bg-[#EEF6EB] hover:bg-opacity-50 rounded-lg p-2 transition-colors">
                    <h3 className="font-medium text-[#282E29] text-sm">{dua.title}</h3>
                    <p className="text-[#417360] text-xs mt-1 truncate">{dua.translation}</p>
                  </div>
                ))}
                {groupedDuas[category].length > 3 && (
                  <p className="text-xs text-gray-500 mt-2 text-center py-2 border-t border-dashed border-gray-200">
                    + {groupedDuas[category].length - 3} more dua{groupedDuas[category].length - 3 > 1 ? 's' : ''}
                  </p>
                )}
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}