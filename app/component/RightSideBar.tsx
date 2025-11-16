"use client";

import { useState } from "react";
import { FaGlobe, FaFont, FaEye, FaPaintBrush, FaChevronDown } from "react-icons/fa";

export default function RightSideBar() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [fontSizeOpen, setFontSizeOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [appearanceOpen, setAppearanceOpen] = useState(false);

  return (
    // hidden on mobile and md, visible from lg and up
    <aside className="hidden lg:block mt-16 w-72 h-screen bg-white border-l border-gray-200 overflow-y-auto fixed right-0">
      <div className="p-4">

        {/* Language Dropdown */}
        <div className="mb-2">
          <button
            className="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100"
            onClick={() => setLanguageOpen(!languageOpen)}
          >
            <div className="flex items-center">
              <FaGlobe className="mr-2 text-[#417360]" />
              Language
            </div>
            <FaChevronDown className={`transition-transform ${languageOpen ? "rotate-180" : ""}`} />
          </button>
          {languageOpen && (
            <div className="pl-6">
              <div className="py-1 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaGlobe className="mr-2" /> English
              </div>
              <div className="py-1 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaGlobe className="mr-2" /> Arabic
              </div>
            </div>
          )}
        </div>

        {/* Font Size Dropdown */}
        <div className="mb-2">
          <button
            className="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100"
            onClick={() => setFontSizeOpen(!fontSizeOpen)}
          >
            <div className="flex items-center">
              <FaFont className="mr-2 text-[#417360]" />
              Font Size
            </div>
            <FaChevronDown className={`transition-transform ${fontSizeOpen ? "rotate-180" : ""}`} />
          </button>
          {fontSizeOpen && (
            <div className="pl-6">
              <div className="py-1 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaFont className="mr-2" /> Small
              </div>
              <div className="py-1 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaFont className="mr-2" /> Medium
              </div>
              <div className="py-1 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaFont className="mr-2" /> Large
              </div>
            </div>
          )}
        </div>

        {/* View Dropdown */}
        <div className="mb-2">
          <button
            className="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100"
            onClick={() => setViewOpen(!viewOpen)}
          >
            <div className="flex items-center">
              <FaEye className="mr-2 text-[#417360]" />
              View
            </div>
            <FaChevronDown className={`transition-transform ${viewOpen ? "rotate-180" : ""}`} />
          </button>
          {viewOpen && (
            <div className="pl-6">
              <div className="py-1 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaEye className="mr-2" /> Grid
              </div>
              <div className="py-1 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaEye className="mr-2" /> List
              </div>
            </div>
          )}
        </div>

        {/* Appearance Dropdown */}
        <div className="mb-2">
          <button
            className="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100"
            onClick={() => setAppearanceOpen(!appearanceOpen)}
          >
            <div className="flex items-center">
              <FaPaintBrush className="mr-2 text-[#417360]" />
              Appearance
            </div>
            <FaChevronDown className={`transition-transform ${appearanceOpen ? "rotate-180" : ""}`} />
          </button>
          {appearanceOpen && (
            <div className="pl-6">
              <div className="py-1 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaPaintBrush className="mr-2" /> Light
              </div>
              <div className="py-1 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaPaintBrush className="mr-2" /> Dark
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}