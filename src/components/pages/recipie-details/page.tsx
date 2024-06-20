import React from "react";
import { RecipieDetail } from "@/app/recipie-list/[details]/page";
import Image from "next/image";
interface RecipieDetailListProps {
  getDetailData: RecipieDetail;
}

const RecipieDetailList: React.FC<RecipieDetailListProps> = ({
  getDetailData,
}) => {
  //console.log(getDetailData,"getDetailData")
  return (
    <section className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-full lg:sticky top-0 sm:flex gap-2">
          <Image
            className="w-4/5 rounded object-cover"
            src={getDetailData?.image}
            alt={getDetailData?.name}
            width={200}
            height={200}
          />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-700">
            {getDetailData?.name} - {getDetailData?.cuisine} <span className="text-2xl text-gray-700">
              {getDetailData?.mealType[0]}
            </span>
          </p>
    

          <div className="mt-5">
            <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
              {getDetailData?.instructions.map((item,i) => (
                <li key={i}> {item} </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
              {getDetailData?.ingredients.map((item,i) => (
                <li key={i}> {item} </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipieDetailList;
