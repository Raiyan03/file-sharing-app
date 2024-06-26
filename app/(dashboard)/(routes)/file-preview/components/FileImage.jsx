import Image from 'next/image';

const FileImage = ({file}) => {
    const fileName = file?.fileName;
    const fileType = file?.fileType;
    const fileUrl = file?.fileUrl;


    return (
        <div className=' flex flex-col  items-center rounded-md'>
            <Image src={ file?.fileType == 'application/pdf' ? `/${file?.fileType}.png` : file?.fileUrl || '/file.png' } width={250} height={250} />
            <div className='flex flex-col'>
                <strong className=" text-lg ">
                    {fileName}
                </strong>
                <span className='text-gray-500'>
                    {fileType} 
                </span>
            </div>
        </div>
  )
}

export default FileImage