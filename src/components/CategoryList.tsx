import axios, { AxiosResponse } from 'axios';
import React, { useEffect , useState} from "react";
import {useDispatch,useSelector } from 'react-redux';
import { fetchCategories , Categories ,fetchCategoryItems} from '../redux/actions/ItemActions';

const CategoryList  = () => {
    
    const [selectedCategoryId,SetSelectedCategoryId] = useState(0);
    const [load,setLoad] = useState(false);
    const dispatch = useDispatch();
    const getCategories = async () => {
        const responseCategories = await axios.get("https://swensonhe-dev-challenge.s3.us-west-2.amazonaws.com/categories.json")
        .catch((err)=>{
            console.log(err);
        }) as AxiosResponse<any, any>;
        dispatch(fetchCategories(responseCategories.data));
        SetSelectedCategoryId(responseCategories.data[0].id);
    }
    const getCategoryItems = async (categoryId:number) => {
        const responseCategoryItems = await axios.get(`https://swensonhe-dev-challenge.s3.us-west-2.amazonaws.com/categories/${categoryId}.json`)
        .catch((err)=>{
            console.log(err);
        }) as AxiosResponse<any, any>;
        dispatch(fetchCategoryItems({
            categoryId: categoryId,
            items: responseCategoryItems.data,
        }));
    }

    useEffect(()=>{
      getCategories();
     
    },[]);
    let categories = useSelector((state: any) => state.categories.categories);
   
    useEffect(() => {
        categories.forEach((category:Categories) => {
            getCategoryItems(category.id);
        });
        
     
      }, [selectedCategoryId]);
  
    let items = useSelector((state: any) => state.items);
    useEffect(() => {
      if(items[selectedCategoryId])
         setLoad(true);
    },[items]);
  return (
   
    <div className=" mx-auto p-4">
      { !load ? (
        <div>...Loading</div>
      ) : (   
        <div>
        <div className="text-xs sm:text-sm md:text-base  xl:text-xl grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category:Categories) => (
                  <div
                  key={category.id}
                  className={"text-blue-500 text-center btn-categories font-serif	 hover:text-blue-700 cursor-pointer"}
                  style={{ borderRadius: '20px', padding: '8px' }}
                  >
                  {category.title}
                  </div>
            ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
            {items[selectedCategoryId].map((item:any) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md relative">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <button
                    className="absolute top-2 right-2 bg-slate-800 text-white rounded-full  "
                    style={{
                      width:'25px',
                      height:'25px'
                    }}
                    onClick={() => {
                      // Handle button click
                    }}
                  >
                    +
                  </button>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                    <p className="text-gray-500">{item.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryList;