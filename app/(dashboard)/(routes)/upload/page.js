"use client"
import UploadForm from './components/UploadForm'
const Upload = () => {
  // const storage=getStorage(app)
  const uploadFile = (file)=> {
    console.log(file)
  }
  return (

    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5' >Start <strong className=' text-primary' > Uploading </strong>  File and <strong className='text-primary'>Share</strong>  it</h2>
      <UploadForm uploadBtnClick={uploadFile} />
    </div>
  )
}

export default Upload;