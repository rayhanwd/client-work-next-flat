import ArrowDown2 from "@/app/icons/ArrowDown2";

export default function FieldWithLabel2() {
  return (
    <div className="basicInfoField">
      <label htmlFor="">Property Owner name</label>
      <div className="fieldWithIcon">
        <input type="text" placeholder="Real estate Agency" />
        <span>
          <ArrowDown2 />
        </span>
      </div>
    </div>
  );
}
