import React from 'react';
import axios from 'axios';
import './css/main.css';
import { useToast } from '@chakra-ui/react';

function AdminPage() {
  const fileInputRef = React.useRef();
  const toast = useToast();

  const handleFileUpload = async () => {
    const files = fileInputRef.current.files;

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`file${i}`, files[i]);
    }

    const firebaseURL = 'YOUR_FIREBASE_URL';

    try {
      await axios.post(firebaseURL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Данные загружены');
    } catch (error) {
      alert('Ошибка');
    }
  };

  return (
    <div className="admin">
      <h1>Upload File</h1>
      <form>
        <input type="file" multiple ref={fileInputRef} />
        <button className="btn" type="button" onClick={handleFileUpload}>
          Upload
        </button>
      </form>
    </div>
  );
}

export default AdminPage;
