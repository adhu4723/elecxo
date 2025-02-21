import React from 'react'

function IconBadge({ count, Icon }) {
  return (
    <div className="relative inline-block bg-gray-100 px-2 py-2 rounded-md hover:bg-gray-200 ">
      {/* Customizable Shopping Cart Icon */}
      <Icon className=" text-black" />

      {/* Badge - Only show when count > 0 */}
      {count > 0 && (
        <div className="absolute -top-2 -right-2 bg-blue-400 text-white px-2 py-1 text-xs rounded-full">
          {count}
        </div>
      )}
    </div>
  )
}

export default IconBadge
