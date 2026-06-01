import {
  CreditCard,
  Truck,
  ShieldCheck,
} from "lucide-react";

import {
  useEffect,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import useProductStore from "../store/useProductStore";

export default function Checkout() {

  const navigate =
    useNavigate();

  const { cart } =
    useProductStore();

  // LOGIN + EMPTY CART PROTECTION
  useEffect(() => {

    const user =
      JSON.parse(
        localStorage.getItem(
          "rupantarUser"
        )
      );

    if (!user) {

      navigate("/");

      return;
    }

    if (cart.length === 0) {

      navigate("/cart");
    }

  }, [cart, navigate]);

  const subtotal =
    cart.reduce(
      (acc, item) =>
        acc +
        item.price *
          item.qty,
      0
    );

  const shipping = 499;

  const total =
    subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#F4F7FB] py-6 px-4">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {/* SHIPPING */}
          <div className="bg-white rounded-[24px] p-6 border border-slate-200">

            <div className="flex items-center gap-3 mb-6">

              <Truck
                size={22}
                className="text-cyan-600"
              />

              <h2 className="text-2xl font-bold text-[#02133B]">
                Shipping Details
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Full Name"
                className="h-12 rounded-xl border border-slate-200 px-4 outline-none text-sm"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="h-12 rounded-xl border border-slate-200 px-4 outline-none text-sm"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="h-12 rounded-xl border border-slate-200 px-4 outline-none md:col-span-2 text-sm"
              />

              <textarea
                placeholder="Shipping Address"
                rows={4}
                className="rounded-xl border border-slate-200 px-4 py-3 outline-none md:col-span-2 text-sm"
              />
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bg-white rounded-[24px] p-6 border border-slate-200">

            <div className="flex items-center gap-3 mb-6">

              <CreditCard
                size={22}
                className="text-cyan-600"
              />

              <h2 className="text-2xl font-bold text-[#02133B]">
                Payment Method
              </h2>
            </div>

            <div className="space-y-3">

              {[
                "UPI Payment",
                "Credit / Debit Card",
                "Net Banking",
                "Cash On Delivery",
              ].map((method, index) => (

                <label
                  key={index}
                  className="flex items-center gap-3 border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-cyan-500 transition"
                >

                  <input
                    type="radio"
                    name="payment"
                  />

                  <span className="font-medium text-sm text-[#02133B]">
                    {method}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>

          <div className="bg-white rounded-[24px] p-6 border border-slate-200 sticky top-24">

            <h2 className="text-2xl font-bold text-[#02133B] mb-6">
              Order Summary
            </h2>

            {/* PRODUCTS */}
            <div className="space-y-4 mb-6 max-h-[350px] overflow-y-auto pr-1">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex gap-3"
                >

                  <img
                    src={item.images[0]}
                    alt=""
                    className="w-20 h-20 rounded-xl object-cover bg-slate-100"
                  />

                  <div className="flex-1">

                    <h3 className="font-semibold text-sm text-[#02133B] line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-xs mt-1">
                      Qty : {item.qty}
                    </p>

                    <h4 className="text-lg font-bold text-[#02133B] mt-2">
                      ₹
                      {item.price *
                        item.qty}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* PRICE */}
            <div className="space-y-3 border-t border-slate-200 pt-5">

              <div className="flex items-center justify-between text-sm text-slate-600">

                <span>Subtotal</span>

                <span>
                  ₹{subtotal}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-600">

                <span>Shipping</span>

                <span>
                  ₹{shipping}
                </span>
              </div>

              <div className="flex items-center justify-between text-xl font-bold text-[#02133B] pt-3 border-t border-slate-200">

                <span>Total</span>

                <span>
                  ₹{total}
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full h-14 rounded-xl bg-gradient-to-r from-[#02133B] to-[#0EA5E9] text-white font-semibold text-base mt-6 hover:scale-[1.01] transition-all">

              Place Order
            </button>

            {/* SECURITY */}
            <div className="flex items-center justify-center gap-2 mt-5 text-slate-500 text-xs">

              <ShieldCheck size={16} />

              Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}