import { useState } from "react"
import "./InputForm.css"

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <label htmlFor="ava">
        {!selectedImage && (
          <div>
            <img src="../pics/avatar.jpg" alt="avatar"/>
          </div>
          
        )}
        {selectedImage && (
          <div>
            <img src={URL.createObjectURL(selectedImage)} alt="avatar"/>
          </div>
        )}
        <input id="ava" className="img-upload" type="file" name="myImage" onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }} />
      </label>
    </div>
  )
}

export default UploadAndDisplayImage;