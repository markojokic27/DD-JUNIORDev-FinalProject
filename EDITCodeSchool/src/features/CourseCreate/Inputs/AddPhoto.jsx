import { useState } from 'react';

function AddPhoto() {
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0]; 


    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.toBlob((blob) => {
          const jpgFile = new File([blob], `new_${file.name.replace(/\.[^/.]+$/, "")}.jpg`, { type: 'image/jpeg' });
          setImageFile(jpgFile);
        }, 'image/jpeg', 1);
      };
    };
  };

  const handleImageUpload = () => {
    const imagePath = `/src/assets/images/${imageFile.name}`;
    console.log('Putanja slike:', imagePath);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Spremi sliku</button>
    </div>
  );
}

export default AddPhoto;
