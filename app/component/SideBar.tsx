
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHands } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { CiBookmarkMinus } from "react-icons/ci";
import { LuClipboardPlus } from "react-icons/lu";
import { BiSolidCategoryAlt } from "react-icons/bi";

const ICON_WRAPPER =
  "h-11 w-11 rounded-lg flex items-center justify-center transition-colors"; // wrapper for size & layout
const ICON_SVG = "h-6 w-6"; // svg size

const SideBar = () => {
  const pathname = usePathname();

  const items = [
    { href: "/", Icon: CiHome, key: "home" },
    { href: "/categories", Icon: BiCategory, key: "category" },
    { href: "/subcategories", Icon: BiSolidCategoryAlt, key: "subcat" },
    { href: "/bookmarks", Icon: CiBookmarkMinus, key: "bookmark" },
    { href: "/add", Icon: LuClipboardPlus, key: "add" },
  ];

  return (
    <div className="hidden md:flex h-screen w-16 bg-[#EEF6EB] fixed left-0 flex-col items-center justify-between py-4">
      {/* logo (top) */}
      <div>
        <Link href="/">
          <div className="h-11 w-11 rounded-lg flex items-center justify-center bg-[#417360] text-white">
            <FaHands className="h-6 w-6" />
          </div>
        </Link>
      </div>

      {/* center items */}
      <div className="flex flex-col items-center gap-3">
        {items.map((it) => {
          const active = pathname === it.href;
          const wrapperClasses = active
            ? `${ICON_WRAPPER} bg-[#7cb49a] text-white`
            : `${ICON_WRAPPER} text-[#2F3B34] hover:text-[#417360]`; // simple hover: only icon color changes

          const Icon = it.Icon;
          return (
            <Link
              key={it.key}
              href={it.href}
              aria-current={active ? "page" : undefined}
            >
              <div className={wrapperClasses}>
                <Icon className={ICON_SVG} />
              </div>
            </Link>
          );
        })}
      </div>

      {/* menu (bottom) */}
      <div>
        <button className="h-11 w-11 rounded-lg flex items-center justify-center text-[#2F3B34] hover:text-[#417360]">
          <IoIosMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
