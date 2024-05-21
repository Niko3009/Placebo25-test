import Image from 'next/image'

export default function CustomImage({ src, style, alt, sizes }) {
  return (
    <Image
      src={src}
      width={100}
      height={100}
      priority
      style={style}
      alt={alt}
      sizes={sizes}
    />
  )
}
export { CustomImage as Image }
