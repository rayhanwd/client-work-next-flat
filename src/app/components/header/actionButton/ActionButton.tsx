import Link from "next/link";

type Props = {};

export default function ActionButton({}: Props) {
  return (
    <Link href={'/login'} className="ml-[39.75px]">
      <span className="bg-primary action-button px-[40px] py-[14px]">
        Log in / Sign up
      </span>
    </Link>
  );
}
