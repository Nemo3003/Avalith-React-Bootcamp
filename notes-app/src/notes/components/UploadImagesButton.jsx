import React from 'react'

export const UploadImagesButton = () => {

  const onFileInputChange = ({target}) => {
    if(target.files===0)return;
    console.log(target.files)
  }
  return (
    <>
      <input
      type='file'
      multiple
      onChange={onFileInputChange}
      
      />
    </>
  )
}


