import Image from 'next/image';

function ImagePreview({ imageSrc, imageAlt }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <Image src={imageSrc} alt={imageAlt} className="h-[400px] w-[600px]" />
    </div>
  );
}

export default ImagePreview;
