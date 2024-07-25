import React from 'react'
import victor from '../../public/image-victor.jpg'
import Image from 'next/image'

const Photo = (props) => {
  return (
    <div className={props.className}>
      <Image src={victor} width={250} height={250} />
    </div>
  )
}

export default Photo