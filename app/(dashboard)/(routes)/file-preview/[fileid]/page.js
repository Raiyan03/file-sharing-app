"use client"
import React, { useEffect, useState } from 'react'
import { app } from '../../../../../firebaseConfig'
import { getFirestore, getDoc, doc, updateDoc } from 'firebase/firestore';
import FileImage from '../components/FileImage'
import FileForm from '../components/FileForm'
const FilePreview = ({params}) => {
    const db = getFirestore(app);
    const [fileInfo, setFileInfo] = useState()
    useEffect(()=>{
        console.log(params?.fileid);
        getFileInfo();
    }, [])

    const getFileInfo= async ()=>{
        const docRef = doc(db, "uploadedfile", params?.fileid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()){
            console.log("document data: ", docSnap.data())
            setFileInfo(docSnap.data())
        } else{
            console.log("No such document found")
        }
    }

    const savePassword = async (password, id)=> {
        const docRef = doc(db, "uploadedfile", id);
        await updateDoc(docRef, {
            password: password
        })
    }

    return (
    <div className='flex flex-col md:flex-row items-center justify-center py-20 gap-5'>
        <div className='p-2 border border-blue-300 rounded-md'>
            <FileImage file={fileInfo}/>
        </div>
        <FileForm file={fileInfo} savePassword={savePassword}/>
    </div>
  )
}

export default FilePreview