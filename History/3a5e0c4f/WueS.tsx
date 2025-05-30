import Image from 'next/image';
import ButtonBox from './ButtonBox';

function ImagePreview({ imageSrc, imageAlt }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <Image src={imageSrc} alt={imageAlt} className="h-[400px] w-[600px]" />
      <ButtonBox className="w-full">
        <button className="btn bg-large w-full bg-inherit">Medium</button>
        <button className="btn bg-large w-full bg-inherit">Medium</button>
      </ButtonBox>
    </div>
  );
}

export default ImagePreview;
