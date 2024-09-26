
import { Image } from 'antd';
import { Card } from '@/components/ui/card';

interface ImageItem {
    img: string;
    title: string;
}

const Gallery = () => {
    const images: ImageItem[] = [
        {
            img: 'https://nurseryplantsbd.com/wp-content/uploads/2022/02/Ferns.jpg',
            title: 'ferns'
        },
        {
            img: 'https://nurseryplantsbd.com/wp-content/uploads/2022/02/Ferns.jpg',
            title: 'ferns'
        },
        {
            img: 'https://nurseryplantsbd.com/wp-content/uploads/2022/02/Ferns.jpg',
            title: 'ferns'
        },
        {
            img: 'https://nurseryplantsbd.com/wp-content/uploads/2022/02/Spice-Plants.jpg',
            title: 'spice plants'
        },
        {
            img: 'https://nurseryplantsbd.com/wp-content/uploads/2022/02/Bamboo-plants.jpg',
            title: 'bamboo plants'
        },
        {
            img: 'https://nurseryplantsbd.com/wp-content/uploads/2022/02/Ficus-Plants.jpg',
            title: 'ficus plants'
        },
        {
            img: 'https://nurseryplantsbd.com/wp-content/uploads/2022/02/Conifer-Plants.jpg',
            title: 'conifer plants'
        },
        {
            img: 'https://nurseryplantsbd.com/wp-content/uploads/2022/02/Palm-Plants.jpg',
            title: 'palm plants'
        },
        {
            img: 'https://nurseryplantsbd.com/wp-content/uploads/2022/02/Perennial-Plants.jpg',
            title: 'perennial plants'
        },
        {
            img: 'https://nurseryplantsbd.com/wp-content/uploads/2022/02/Avenue-Trees.jpg',
            title: 'avenue trees'
        }
    ];
    return (
        <div className=' py-11'>
            <h1 className='text-center text-3xl font-bold p-5 text-[#083214]'>Our Nursery Gallery</h1>
            <h1 className='text-center text-xl font-bold pb-3 text-[#083214]'>Shop By Plants Type</h1>
            <div className='grid lg:grid-cols-5 justify-items-center md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    images?.map((image) => (
                        <div>
                            <Card className='rounded-none'>
                                <Image
                                    height={280}
                                    // width={250}
                                    src={image.img}
                                />
                                <h1 className='font-semibold text-base text-[#083214] uppercase text-center p-1 '>{image.title}</h1>
                            </Card>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Gallery;