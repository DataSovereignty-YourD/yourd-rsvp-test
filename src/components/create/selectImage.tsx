import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function SelectImage() {
  const [imageSrc, setImageSrc]: any = useState(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // 여기서 파일을 처리하거나 서버에 업로드 합니다.
    // 예시로 Console에 로그를 출력합니다.
    acceptedFiles.forEach((file: File) => {
      console.log(file.name, file.size, file.type);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

  const onUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  return (
    <div className=" flex flex-col gap-2 items-center justify-center">
      <div className="text-black font-normal">Your Logo</div>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed gray",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>이미지 파일을 여기에 드래그하세요!</p>
        ) : (
          <p>이미지를 드래그하여 업로드하거나 여기를 클릭하세요.</p>
        )}
      </div>
    </div>
  );
}

export default SelectImage;
