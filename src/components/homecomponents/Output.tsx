"use client"
import React from 'react'
import { Badge } from '../ui/badge'
import { BorderBeam } from '../magicui/border-beam'
import { useContext } from 'react'
import { BioContext } from '@/context/BioContext'
import { Skeleton } from '../ui/skeleton'
import CopyLabel from './CopyLabel'
export const dynamic = "force-dynamic"
function Output() {
  const {output,loading}=useContext(BioContext)
  return (
    <div className='relative flex min-h-[50vh] mt-2 flex-col rounded-xl bg-muted/30 backdrop-blur-sm overflow-hidden border border-primary/5'>
      {loading && <BorderBeam size={1200} borderWidth={1.5} duration={8} className='z-10'/>}
      <Badge variant="outline" className='absolute top-3 right-3 z-50'>Output</Badge>

      {
        loading?
        <Skeleton className='w-full h-full bg-primary/20'/>
        :
        <ul className='flex flex-col items-start justify-start space-y-12 p-16'>
          {
          output?.data.map((data,index)=>{
            return (
              <li key={index} className='w-full text-base rounded-md border border-primary/20 p-4 relative bg-background backdrop-blur-sm'>
                {data.bio}
                <span className='absolute top-[99%] right-0'>
                  <CopyLabel text={data.bio}/>
                </span>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}

export default Output