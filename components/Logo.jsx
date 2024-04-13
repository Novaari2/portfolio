import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/bg.png" alt="logo" width={180} height={100} priority />
    </Link>
  )
}

export default Logo