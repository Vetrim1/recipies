import RecipiesList from '@/components/pages/recipie-list/page';
interface Recipie {
  id: number;
  name: string;
  rating: number;
  cuisine: string;
  image: string;
}

const fetchListOfRecipes=async (): Promise<Recipie[]>=>{
  try{
const apiRes=await fetch('https://dummyjson.com/recipes');
const data= await apiRes.json();
return data.recipes;

  }catch(e){
    //throw new Error(e)
    throw new Error(e instanceof Error ? e.message : String(e));
  }
}

const Recipies = async() => {
  const recipieList= await fetchListOfRecipes();
  return (
    <RecipiesList recipieList={recipieList}/>
  )
}

export default Recipies;