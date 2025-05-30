function ImagePreview({ imageSrc, imageAlt }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <img scr={imageSrc} alt={imageAlt} />
    </div>
  );
}

export default ImagePreview;
