import Search2 from "@/app/icons/Search2";

export default function SearchField() {
  return (
    <div className="flex items-center ml-[107.63px]">
      <Search2 />
      <div className="w-[313.469px] ml-[28.24px]">
        <input type="text" placeholder="Type to search a localisation..." className="w-full search-text"/>
      </div>
    </div>
  );
}
