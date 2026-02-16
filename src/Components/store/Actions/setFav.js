import React from 'react'

export default function setFav(data){
  return {
    type:"set_fav",
    payload:data
  }
}