"use client"
import UploadForm from './components/UploadForm'
import { app } from '../../../../firebaseConfig'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from 'react'
import { doc, setDoc } from 'firebase/firestore';
import { useUser } from '@clerk/nextjs';
import {generateRandomString} from "../../../utils/GenerateRandomString"
import { useRouter } from 'next/navigation';
const Upload = () => {
  const { user } = useUser();
  const [progress, setProgress] = useState(0)
  const router = useRouter();
  const [docId, setFileDoc] = useState();
  const [uploadCompleted, setUploadCompleted] = useState();
  const resetProgress = () => {
    setProgress(p => p = 0);
  }
  const storage=getStorage(app)
  const db = getFirestore(app)
  const uploadFile = async (file)=> {
    console.log(file)
    const metadata = {
      contentType: file?.type
    }
    const storageRef = ref(storage, 'file-upload/'+file?.name);
    const uploadTask =  uploadBytesResumable(storageRef, file, metadata);
     uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setProgress(p => p = progress)
    progress==100 &&  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      saveInfo(file, downloadURL)
    })
  }, )
  }

  const saveInfo= async (file, fileUrl)=>{
    const docId=generateRandomString();
    const data = await setDoc(doc(db, "uploadedfile", docId), {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileUrl: fileUrl,
      userEmail: user.primaryEmailAddress.emailAddress,
      userName:user.fullName,
      password:'',
      id:docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL+docId
    });
    console.log(data)
    setFileDoc(docId)
    setUploadCompleted(true)
  }

  useEffect(()=> {
    uploadCompleted &&
    setTimeout(()=>{
      setUploadCompleted(false);
      router.push('/file-preview/'+docId)
    }, 2000)
  }, [uploadCompleted == true])

  return (

    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5' >Start <strong className=' text-primary' > Uploading </strong>  File and <strong className='text-primary'>Share</strong>  it</h2>
      <UploadForm uploadBtnClick={uploadFile} progress={progress} resetProgress={resetProgress} />
    </div>
  )
}

export default Upload;