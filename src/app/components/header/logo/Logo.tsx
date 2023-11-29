import Image from "next/image"
import Link from "next/link"

type Props = {}

export default function Logo({}: Props) {
  return (
    <Link href={'/'} className="w-full">
      <Image src="/logo-default.png" width={167} height={76} alt="next-flat"/>
    </Link>
  )
}