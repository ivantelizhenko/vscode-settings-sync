import Image from 'next/image';
import ButtonBox from './ButtonBox';

function ImagePreview({ imageSrc, imageAlt }) {
  return (
    <div className="flex w-full justify-center border-[#DDE1E7] p-[10px]">
      <div className="flex w-[600px] flex-col gap-[16px]">
        <Image src={imageSrc} alt={imageAlt} className="h-[400px] w-[600px]" />
        <ButtonBox className="w-full">
          <button className="btn bg-large grow border-black bg-inherit">
            Medium
          </button>
          <button className="btn bg-large grow border-black bg-inherit">
            Medium
          </button>
        </ButtonBox>
      </div>
    </div>
  );
}

export default ImagePreview;
