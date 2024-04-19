import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav>
  <ul className="menu">
    <h1 className='logo  mr-50 '><span className='text-orange-q'>Eco    </span><span className='text-black-q'>Playground</span></h1>
    {/* <li className="item"><a href="#"></a></li> */}
   
    <li className="item"><a href="#">Item 1</a></li>
    <li className="item"><a href="#">Item 2</a></li>
    <li className="item"><a href="#">Item 2</a></li>
    
    
    <li className="item-button"><a href="#">
      <div>
      <button className='w-20 h-10 bg-orange-q text-white rounded-3xl'>Sign</button>
      </div>
      </a></li>
    
  </ul>
</nav>
  </>
  );
};

export default Navbar;