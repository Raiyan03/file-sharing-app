"use client"
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { app } from '../../../firebaseConfig';
import React, { useEffect, useState } from 'react'
import FileItem from './components/FileItem';
function FileView({params}) {
    const db = getFirestore(app);

    const [fileInfo, setFileInfo] = useState();
    useEffect(() => {
        getFileInfo()
    }, []);

    const getFileInfo= async ()=>{
        const docRef = doc(db, "uploadedfile", params?.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()){
            setFileInfo(docSnap.data())
        } else{

        }
    }

    return (
        <div className=' flex min-h-screen justify-center items-center'>
            <FileItem file={fileInfo} />
        </div>
    )
}

export default FileView