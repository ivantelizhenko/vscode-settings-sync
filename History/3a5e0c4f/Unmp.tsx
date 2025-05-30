import Image from 'next/image';
import ButtonBox from './ButtonBox';

function ImagePreview({ imageSrc, imageAlt, handleDelete }) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[600px] flex-col gap-[16px] rounded-sm border border-[#DDE1E7] p-[10px]">
        <Image src={imageSrc} alt={imageAlt} className="h-[400px] w-[600px]" />
        <ButtonBox className="w-full">
          <button className="btn bg-large grow border-black bg-inherit">
            Remove
          </button>
        </ButtonBox>
      </div>
    </div>
  );
}

export default ImagePreview;
