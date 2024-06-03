const ProgressBar = ({progress='40'}) => {
  return (
    <div className="bg-gray-400 w-full h-4 mt-3
    rounded-full">
        <div className={` items-center bg-primary rounded-full w-[${String(progress)}%] h-4 text-[10px]`}>
            {`${Number(progress).toFixed(0)}%`}
        </div>
    </div>
  )
}

export default ProgressBar