import Image from "next/image"
import { useRouter } from "next/navigation"
const FileView = ({file}) => {
    const router = useRouter()
    const shareFile = (id) => {
        router.push(`/file-preview/${id}`)
    }
    const openFile = (url) => {
        window.open(url, '_blank')
    }
    
  return (
    <div className="flex md:flex-col md:w-1/6 sm:w-fit justify-between items-center bg-blue-50 m-3 border border-blue-200 rounded-md p-5">
        <div className="h-3/6 flex items-center ">
            <Image src={ file?.fileType == 'application/pdf' ? `/${file?.fileType}.png` : file?.fileUrl || '/file.png' } width={200} height={100} />
        </div>
        <div className="flex flex-col gap-1 items-center">
            <div className="hover:underline cursor-pointer active:text-primary">
                <p className="text-lg text-wrap" onClick={() => openFile(file?.fileUrl)}>{file?.fileName}</p>
            </div>
            <div className="flex gap-4">
                <button className="bg-primary text-lg text-white rounded-md p-1 md:w-full" onClick={() => shareFile(file?.id)} >
                    Share
                </button>
            </div>
        </div>
    </div>
  )
}

export default FileView