import React from "react";

const Sample = () => {
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img
          class="w-full"
          src="https://live.staticflickr.com/65535/52521844332_5f738162d8_o.jpg"
          alt="ProductImage"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Product Name</div>
          <p class="text-gray-700 text-base">Product description here...</p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #Tag1
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #Tag2
          </span>
        </div>
        <div class="px-6 py-4">
          <button class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sample;
