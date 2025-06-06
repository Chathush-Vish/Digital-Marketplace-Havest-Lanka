import React from "react";

function DeleteInventoryItem(props) {
   const { selectedItem, setIsClickDeleteItem, setSelectedItemId, deleteItem } =
      props;

   // close function for item delete popup
   const closeForm = (e) => {
      if (e.target.id === "deleteInventoryForm") {
         setIsClickDeleteItem(false);
         setSelectedItemId("");
      } else if (e.target.id === "closeBtn") {
         setIsClickDeleteItem(false);
         setSelectedItemId("");
      }
   };

   return (
      <div
         className="w-full h-screen bg-black/80 fixed top-0 left-0 z-[100] flex items-center justify-center"
         id="deleteInventoryForm"
         onClick={closeForm}
      >
         <div className="flex flex-col gap-5 py-8 px-8 rounded shadow bg-white items-center justify-center ">
            <div className="text-base">
               <span className="text-xl">⚠️</span> Are you sure you want to
               delete this item?
            </div>
            <div className="flex gap-3">
               <button
                  onClick={() => deleteItem(selectedItem)}
                  className="bg-main-green text-white w-40 h-10 rounded-sm"
               >
                  Yes
               </button>
               <button
                  id="closeBtn"
                  className="bg-black/80 rounded-sm text-white w-40 h-10"
                  onClick={() => {
                     closeForm();
                  }}
               >
                  No
               </button>
            </div>
         </div>
      </div>
   );
}

export default DeleteInventoryItem;
