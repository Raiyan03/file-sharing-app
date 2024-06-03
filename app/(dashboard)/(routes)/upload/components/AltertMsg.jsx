import { AlertCircle } from "lucide-react"

const AltertMsg = ({msg}) => {
  return (
    <div className=" p-4 bg-red-500 mt-5 text-white rounded-md flex gap-5">
        <AlertCircle/>
        {msg}
    </div>
  )
}

export default AltertMsg