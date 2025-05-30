import Image from 'next/image';
import ButtonBox from './ButtonBox';
import { AnswerOptions } from '@/app/store/createTaskSlice';

type ImagePreviewProps = {
  imageSrc: string;
  imageAlt: string;
  handleDelete: (type?: AnswerOptions) => void;
};

function ImagePreview({ imageSrc, imageAlt, handleDelete }: ImagePreviewProps) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[600px] flex-col gap-[16px] rounded-sm border border-[#DDE1E7] p-[10px]">
        <Image src={imageSrc} alt={imageAlt} className="h-[400px] w-[600px]" />
        <ButtonBox className="w-full">
          <button
            type="button"
            className="btn bg-large grow border-black bg-inherit"
            onClick={() => handleDelete(imageAlt)}
          >
            Remove
          </button>
        </ButtonBox>
      </div>
    </div>
  );
}

export default ImagePreview;
