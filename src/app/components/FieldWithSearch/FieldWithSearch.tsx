import ArrowDown from "@/app/icons/ArrowDown";
import Search2 from "@/app/icons/Search2";
import React, { ChangeEvent, FocusEvent } from "react";

interface Props {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  name?: string;
  label: string;
  type: string;
  placeholder?: string;
}

export default function FieldWithSearch() {
  return (
    <div className="fc w-[345px] px-[16px] gap-[6px] rounded-[4px] ring-1 ring-[#868686]">
      <span>
        <Search2 />
      </span>
      <input
        type={"type"}
        className="field-style-2"
        name={"name"}
        placeholder={"Country*"}
        // onChange={onChange}
        // onBlur={onBlur}
      />
      <span>
        <ArrowDown width={20} height={55} />
      </span>
    </div>
  );
}
