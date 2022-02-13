import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Dispatch, SetStateAction } from "react";
import { useDropzone } from "react-dropzone";
import { v4 as uuid } from "uuid";
import { storage } from "../firebase";

type UploadProps = {
  state: UploadState;
  setState: Dispatch<SetStateAction<UploadState>>;
};

export default function Upload({ state, setState }: UploadProps) {
  const onUpload = async (acceptedFiles: File[]) => {
    if (!acceptedFiles) {
      return;
    }

    if (state.uploading) {
      return;
    }

    const file = acceptedFiles[0];

    setState({ ...state, uploading: true });

    const id = uuid();

    const fileRef = await uploadBytes(ref(storage, `images/${id}`), file);

    const url = await getDownloadURL(fileRef.ref);

    setState({
      ...state,
      uploading: false,
      url: url,
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: onUpload,
  });

  const { onClick, ...rootProps } = getRootProps();

  return (
    <section className="container text-center">
      <h1 className="title title--upload">Upload your image</h1>
      <p className="subtitle subtitle--upload">File should be Jpeg, Png...</p>

      <div className="file-upload">
        <div {...rootProps} onClick={onClick} className="file-drop">
          <input {...getInputProps()} />
          <img src="/image.svg" alt="image upload iconography" />
          <p>Drag & Drop your image here</p>
        </div>

        <p>Or</p>

        <button className="button" onClick={onClick}>
          Choose a file
        </button>
      </div>
    </section>
  );
}
