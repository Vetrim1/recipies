import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link'

interface Recipie {
  id: number;
  name: string;
  rating: number;
  cuisine: string;
  image: string;
}

interface RecipieListProps {
  recipieList: Recipie[];
}


//const RecipiesList = ({ recipieList }:RecipieListProps) => {
const RecipiesList: React.FC<RecipieListProps> = ({ recipieList }) => {
 // console.log(recipieList)
  return (
    <section className='p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full'>
      <p className='text-4xl font-bold text-gray-800 mb-12'>Recipies List Component</p>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {recipieList?.map((recipie) => (
          <Link href={`/recipie-list/${recipie.id}`} key={recipie.id}>
            <Card key={recipie.id}>
            <CardContent className='bg-white rounded-md overflow-hiddenshadow-md cursor-pointer hover:scale-[1.1] transition-all'>
              <Image src={recipie.image} alt={recipie.name} 
              className='w-full h-full object-cover object-top'
              width={200} height={200}/>
              <div className=' p-2'>
                <p className='text-lg font-bold text-gray-800'>{recipie.name}</p>
                <div className='mt-4 flex justify-between flex-wrap gap-2'>
                  <p className='text-sm text-gray-500'>
                    Ratings: {recipie.rating} ⭐
                  </p>
                  <p className='text-sm text-gray-500'>
                     {recipie.cuisine}
                  </p>
                </div>
              </div>
            </CardContent>
            </Card>
          </Link>
          ))}
      </div>
    </section>
  )
}

export default RecipiesList;