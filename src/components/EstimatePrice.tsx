import React  from 'react';

const EstimatePrice = () => {
    const selectedItems = [
        { id: 1, title: 'Selected Item 1', price: '$10' },
        { id: 2, title: 'Selected Item 2', price: '$15' },
        { id: 3, title: 'Selected Item 3', price: '$20' },
    ];

  return (
    <div className="bg-white shadow-md rounded p-4 h-full text-center">
        <div className="flex flex-col ...">
            <div  className="h-40">
            <h2 className="text-2xl font-semibold mb-4">Estimate Price</h2>

            <div className="mb-4">
            <p className="mb-4 text-sm uppercase">
              <strong>Basic</strong>
            </p>
            <h3 className="mb-6 text-3xl">
              <strong>$ 129</strong>
              <small className="text-base text-neutral-500 dark:text-neutral-300">/year</small>
            </h3>
            </div>

            </div>
            <div  className="h-80">
                <div className="mb-4">
                    <div className="p-6">
                         <ol className="list-inside">
                    {selectedItems.map((item) => (

                           <li className="mb-4 flex" key={item.id}>
                               {item.title} 
                           </li>
                       
                    ))}
                      </ol>
                </div>
                </div>
            </div>
            <div  className="h-10">
            <button type="button"
              className="inline-block w-full rounded bg-success px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init data-te-ripple-color="light"
              style={{
                backgroundColor:"rgb(93, 163, 169)"
            }}>
              Save
            </button>
            </div>
        </div>
     
     
    </div>
  );
};
    
export default EstimatePrice;