import {
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useEffect,
} from "react";

import useProductStore from "../store/useProductStore";

export default function CartPage() {

  const navigate =
    useNavigate();

  const {
    cart,
    setCart,
  } = useProductStore();

  // LOGIN PROTECTION
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

  }, [navigate]);

  // UPDATE QUANTITY
  const updateQty = (
    id,
    type
  ) => {

    const updated =
      cart.map((item) => {

        if (
          item.id === id
        ) {

          if (
            type ===
            "increase"
          ) {

            return {
              ...item,
              qty:
                item.qty + 1,
            };
          }

          if (
            type ===
            "decrease"
          ) {

            return {
              ...item,
              qty:
                item.qty > 1
                  ? item.qty - 1
                  : 1,
            };
          }
        }

        return item;
      });

    setCart(updated);
  };

  // REMOVE ITEM
  const removeItem = (
    id
  ) => {

    const updated =
      cart.filter(
        (item) =>
          item.id !== id
      );

    setCart(updated);
  };

  // TOTALS
  const subtotal =
    cart.reduce(
      (acc, item) =>
        acc +
        item.price *
          item.qty,
      0
    );

  const shipping =
    cart.length > 0
      ? 499
      : 0;

  const total =
    subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#F4F7FB] py-6 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-6">

          <p className="text-cyan-500 font-semibold uppercase tracking-[0.2em] text-xs mb-2">
            Your Cart
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-[#02133B]">
            Shopping Cart
          </h1>
        </div>

        {/* EMPTY */}
        {cart.length === 0 && (

          <div className="bg-white rounded-[24px] p-10 text-center border border-slate-200">

            <ShoppingBag
              size={55}
              className="mx-auto text-slate-300"
            />

            <h2 className="text-2xl font-bold text-[#02133B] mt-5">
              Your Cart is Empty
            </h2>

            <p className="text-slate-500 text-sm mt-3">
              Explore premium refurbished products from RUPANTAR.
            </p>

            <button
              onClick={() =>
                navigate(
                  "/discover"
                )
              }
              className="mt-6 h-12 px-8 rounded-xl bg-gradient-to-r from-[#02133B] to-[#0EA5E9] text-white font-medium text-sm"
            >
              Explore Products
            </button>
          </div>
        )}

        {/* CONTENT */}
        {cart.length > 0 && (

          <div className="grid lg:grid-cols-3 gap-6">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-4">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-[24px] border border-slate-200 p-4"
                >

                  <div className="flex flex-col md:flex-row gap-4">

                    {/* IMAGE */}
                    <div className="w-full md:w-[170px] h-[170px] rounded-[20px] overflow-hidden bg-gradient-to-br from-[#E0F2FE] via-[#ECFEFF] to-[#DCFCE7] flex items-center justify-center">

                      <img
                        src={
                          item.images[0]
                        }
                        alt=""
                        className="w-[130px] h-[130px] object-contain"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 flex flex-col">

                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <p className="text-cyan-600 text-sm font-medium mb-1">
                            {
                              item.category
                            }
                          </p>

                          <h2 className="text-xl font-bold text-[#02133B] leading-snug">
                            {
                              item.title
                            }
                          </h2>
                        </div>

                        {/* REMOVE */}
                        <button
                          onClick={() =>
                            removeItem(
                              item.id
                            )
                          }
                          className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition"
                        >
                          <Trash2
                            size={18}
                          />
                        </button>
                      </div>

                      {/* PRICE */}
                      <div className="mt-4 flex items-center gap-3 flex-wrap">

                        <span className="text-2xl font-bold text-[#02133B]">
                          ₹
                          {
                            item.price
                          }
                        </span>

                        <span className="line-through text-slate-400 text-base">
                          ₹
                          {
                            item.originalPrice
                          }
                        </span>
                      </div>

                      {/* QUANTITY */}
                      <div className="mt-auto pt-5 flex items-center justify-between flex-wrap gap-4">

                        <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-3 py-2">

                          <button
                            onClick={() =>
                              updateQty(
                                item.id,
                                "decrease"
                              )
                            }
                            className="w-8 h-8 rounded-lg bg-white flex items-center justify-center"
                          >
                            <Minus
                              size={16}
                            />
                          </button>

                          <span className="text-base font-bold min-w-[20px] text-center">
                            {
                              item.qty
                            }
                          </span>

                          <button
                            onClick={() =>
                              updateQty(
                                item.id,
                                "increase"
                              )
                            }
                            className="w-8 h-8 rounded-lg bg-white flex items-center justify-center"
                          >
                            <Plus
                              size={16}
                            />
                          </button>
                        </div>

                        <h3 className="text-2xl font-bold text-[#02133B]">
                          ₹
                          {item.price *
                            item.qty}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div>

              <div className="bg-white rounded-[24px] border border-slate-200 p-6 sticky top-24">

                <h2 className="text-2xl font-bold text-[#02133B] mb-6">
                  Order Summary
                </h2>

                {/* PRICE */}
                <div className="space-y-4">

                  <div className="flex items-center justify-between text-sm text-slate-600">

                    <span>
                      Subtotal
                    </span>

                    <span>
                      ₹
                      {
                        subtotal
                      }
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-600">

                    <span>
                      Shipping
                    </span>

                    <span>
                      ₹
                      {
                        shipping
                      }
                    </span>
                  </div>

                  <div className="border-t border-slate-200 pt-4 flex items-center justify-between">

                    <span className="text-lg font-bold text-[#02133B]">
                      Total
                    </span>

                    <span className="text-2xl font-bold text-[#02133B]">
                      ₹{total}
                    </span>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() =>
                    navigate(
                      "/checkout"
                    )
                  }
                  className="w-full h-14 rounded-xl bg-gradient-to-r from-[#02133B] to-[#0EA5E9] text-white font-semibold text-sm mt-6 flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
                >

                  Proceed To Checkout

                  <ArrowRight
                    size={18}
                  />
                </button>

                {/* TRUST */}
                <div className="mt-6 bg-[#F4F7FB] rounded-xl p-4">

                  <h3 className="font-semibold text-sm text-[#02133B] mb-1">
                    Secure Checkout
                  </h3>

                  <p className="text-slate-500 text-xs leading-6">
                    Your payment information is encrypted and securely processed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}