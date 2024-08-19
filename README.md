# FileShare

## Overview

**FileShare** is a secure and intuitive file-sharing platform that allows users to effortlessly upload, encrypt, and share files with others. With easy-to-use interfaces and robust backend support, FileShare ensures that your files are shared safely and efficiently. Whether you need to send sensitive documents or simply share media with friends, FileShare has you covered.

## Index

- [Deployment](#deployment)
- [Video Demo](#video-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Design](#system-design)
- [Installation](#installation)
- [Usage](#usage)

## Deployment

You can access the live deployment of FileShare here: [FileShare Live](https://file-sharing-app-seven-flame.vercel.app)

## Video Demo

https://github.com/user-attachments/assets/4c40c662-ced0-4df9-b589-fa5795af230f

## Features

- **User Authentication**: Secure user authentication using Clerk, allowing users to create accounts and log in to the platform.
- **File Upload Portal**: Simple interface for users to upload files, view access links, and encrypt files with passwords.
- **Email Sharing**: Automated email service powered by Resend to share files with recipients, who can access files without needing an account.
- **Password Protection**: Option to encrypt files with a password that recipients must enter to access the shared file.
- **File Management**: Users can view all their uploaded files and manage sharing options directly from a dedicated page.
- **Real-Time Database**: Firebase is used to store file access links and manage user data, ensuring fast and reliable access.

## Tech Stack

![Tech stack](https://github.com/user-attachments/assets/c9909576-3571-4352-ab52-20d5efbdefba)

- **Frontend**: Next.js (React)
- **Backend**: Next.js API Routes
- **Database**: Firebase
- **File Storage**: Firebase Storage
- **Email Service**: Resend

## System Design

![System design file sharing](https://github.com/user-attachments/assets/007f7677-6997-4524-a2f2-1645d15ae6c5)


### System Workflow

- **User Authentication**: Users log in via Clerk, accessing their personal file-sharing portal.
- **File Upload Process**: Users upload files through the portal, after which they are redirected to a page where they can view and manage the file's access link, encrypt it, and share it via email.
- **Backend Operations**: The Next.js backend processes file uploads and manages communication with Firebase for data storage and Resend for email notifications.
- **File Storage and Database**: Files are stored in Firebase Storage, with access links and associated metadata saved in the Firebase database.
- **File Sharing**: When a user shares a file, Resend sends an email to the recipient with the access link and any password required to access the file.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/fileshare.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env.local` file. Copy and paste the following configuration into the `.env.local` file:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   ```

   Replace the placeholders with your actual values from Firebase and Clerk.

4. Start the Next.js development server:
   ```bash
   npm run dev
   ```

## Usage

1. **User Login**: Users create an account or log in using Clerk.
2. **File Upload**: Upload files, view access links, and optionally encrypt files with a password.
3. **Sharing Files**: Enter the recipient's email, and an access link is sent via Resend.
4. **File Management**: Users can view and manage their uploaded files and sharing options on a dedicated page.
