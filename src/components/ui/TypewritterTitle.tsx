"use client"
import React from 'react'
import TypeWriter from 'typewriter-effect';

type Props = {}

const TypeWritterTitle = (props: Props) => {
  return (
      <TypeWriter options={{
            loop:true,
      }}
      onInit={(typewriter)=>{
            typewriter.typeString("Elevate Your Notetaking.").start()
            .pauseFor(1000)
            .deleteAll()
            typewriter.typeString("Smarter Notes, Seamless Intelligence.").start()
      }}
      />
      )
}

export default TypeWritterTitle