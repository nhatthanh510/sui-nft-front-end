import React from 'react';
import CartItem from './CartItem';

export default function SideCart() {
  return (
    <div className="sticky top-6 h-full w-1/4 shrink-0 grow-0 ">
      <div className="rounded-2xl border-2 border-[#9E8AA1] px-4 py-6">
        <h2 className="text-base font-bold">Cart</h2>
        <p className="mt-2 flex flex-row justify-between text-sm">
          2 items <button className="text-red-500">Clear All</button>
        </p>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <p className="mt-5 flex flex-row items-center justify-between px-3 text-base font-bold">
          Total <span className="text-xs font-bold text-[#34cb55]">2.29 APT</span>
        </p>
        <button className="btn mt-6 w-full">Buy Now</button>
        <p className="mt-4 text-xs text-gray">
          By clicking &ldquo;Buy now&ldquo;, you agree to the BlueMove Terms of Service
        </p>
        <p className="mt-2 text-xs text-gray">
          Each transaction will incure non-refundable gas fees.
        </p>
      </div>
    </div>
  );
}
