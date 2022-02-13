import React from 'react'
import { IconParkOutlineLoadingFour } from '../tools'
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-20">
      <IconParkOutlineLoadingFour className="text-hacker-orange animate-spin" />
    </div>
  )
}
