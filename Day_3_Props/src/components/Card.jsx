import React from 'react'
//Price = "20" is the default value for Price prop
function Card({Price = "20", TagNumber, title}) {
  return (
    <>
       <div className="w-60 flex flex-col rounded-xl bg-pink min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h1 className="font-bold ">{title}</h1>
            <h1>Price</h1>
          </div>
          <div className="flex  justify-between">
            <p>{TagNumber}</p>
            <p>{Price}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card