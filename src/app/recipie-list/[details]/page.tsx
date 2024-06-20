import RecipieDetailList from "@/components/pages/recipie-details/page";
import React from "react";
export interface RecipieDetail {
  id: number;
  name: string;
  image: string;
  mealType: Array<string>;
  cuisine: string;
  ingredients: Array<string>;
  instructions: Array<string>;
}
interface RecipieDetailProps {
  params: {
    details: string;
  };
}

const fetchRecipesDetailList = async (getIdFromParams: string): Promise<RecipieDetail> => {
  try {
    const apiRes = await fetch(`https://dummyjson.com/recipes/${getIdFromParams}`);
    if (!apiRes.ok) {
      throw new Error('Failed to fetch recipe details');
    }
    const data: RecipieDetail = await apiRes.json();
    return data;
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : String(e));
  }
};

const RecipieDetail: React.FC<RecipieDetailProps> = async ({ params }) => {
  const getDetailData = await fetchRecipesDetailList(params?.details);
  //console.log(getDetailData,"getDetailData")
  return (
    <section>
      <RecipieDetailList getDetailData={getDetailData} />
    </section>
  )
};

export default RecipieDetail;
