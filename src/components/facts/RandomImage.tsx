import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getImages } from '@services/index';
import { factImage } from '@/common/content';
import Toaster from '../Toasts';

/**
 * It fetches a random image from thecatapi.com and displays it
 * @param  - cat.Count
 * @returns A React component that displays a random cat image.
 */
function RandomImage({ count }: cat.Count): JSX.Element {
  const [image, setImage] = useState<cat.FactImage>(factImage);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setImage((await getImages(count))[0]);
        setIsError(false);
      } catch (error) {
        setImage(factImage);
        setIsError(true);
      }
    })();
  }, [count]);

  return (
    <>
      <Image
        className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        src={image.url}
        alt="Cat pictures"
        height={200}
        width={200}
        unoptimized
      />
      <span>
        <Toaster
          toast={isError}
          setToast={setIsError}
          message="Error to fetch Images"
          type="danger-toast"
        />
      </span>
    </>
  );
}

export default RandomImage;
