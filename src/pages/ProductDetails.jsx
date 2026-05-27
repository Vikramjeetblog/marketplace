import {
  useMemo,
  useState,
  useEffect,
} from "react";
import LoginPage from "./LoginPage";
import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  ShoppingCart,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Minus,
  Plus,
} from "lucide-react";

import useProductStore from "../store/useProductStore";

export default function ProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    products,
    cart,
    setCart,
  } = useProductStore();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] =
    useState(product?.images?.[0]);

  const [activeTab, setActiveTab] =
    useState("description");

  const [quantity, setQuantity] =
    useState(1);
    const [
  showLogin,
  setShowLogin,
] = useState(false);

  // RESET STATE WHEN PRODUCT CHANGES
  useEffect(() => {

    if (product) {

      setSelectedImage(
        product.images?.[0]
      );

      setQuantity(1);

      setActiveTab("description");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

  }, [product]);

  // RELATED PRODUCTS
  const relatedProducts = useMemo(() => {

    return products
      .filter(
        (item) =>
          item.id !== product?.id
      )
      .slice(0, 4);

  }, [products, product]);

  // PRODUCT NOT FOUND
  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-3xl font-bold">
        Product Not Found
      </div>
    );
  }

  // ADD TO CART
const addToCart = () => {

  const user = JSON.parse(
    localStorage.getItem("rupantarUser")
  );

  // NOT LOGGED IN
  if (!user) {

    setShowLogin(true);

    return false;
  }

  const existing = cart.find(
    (item) => item.id === product.id
  );

  let updatedCart;

  if (existing) {

    updatedCart = cart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            qty: item.qty + quantity,
          }
        : item
    );

  } else {

    updatedCart = [
      ...cart,
      {
        ...product,
        qty: quantity,
      },
    ];
  }

  setCart(updatedCart);

  return true;
};

  // BUY NOW
  const buyNow = () => {

  const success =
    addToCart();

  // STOP IF NOT LOGGED IN
  if (!success) return;

  navigate("/checkout");
};

  return (
    <div className="bg-[#f4f7f8] min-h-screen pb-32">

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>

            {/* MAIN IMAGE */}
            <div className="bg-white rounded-3xl overflow-hidden relative group">

              <img
                src={selectedImage}
                alt=""
                className="w-full h-[500px] object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute top-4 left-4 bg-[#08245c] text-white px-4 py-1 rounded-full text-sm">
                Refurbished
              </div>

              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                {product.discount}% OFF
              </div>
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-4 mt-4 overflow-x-auto pb-2">

              {product.images.map((img, index) => (

                <button
                  key={index}
                  onClick={() =>
                    setSelectedImage(img)
                  }
                  className={`min-w-[90px] h-[90px] rounded-2xl overflow-hidden border-2 ${
                    selectedImage === img
                      ? "border-blue-600"
                      : "border-transparent"
                  }`}
                >

                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">

            <div>

              <p className="text-blue-600 font-medium">
                {product.category}
              </p>

              <h1 className="text-4xl font-bold text-[#08245c] mt-2">
                {product.title}
              </h1>

              {/* RATING */}
              <div className="flex items-center gap-4 mt-4">

                <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">

                  <Star
                    size={16}
                    fill="#facc15"
                  />

                  <span className="font-semibold">
                    {product.rating}
                  </span>
                </div>

                <span className="text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* PRICE */}
            <div className="bg-white rounded-3xl p-6">

              <div className="flex items-center gap-4 flex-wrap">

                <h2 className="text-5xl font-bold text-[#08245c]">
                  ₹{product.price}
                </h2>

                <span className="text-2xl line-through text-gray-400">
                  ₹{product.originalPrice}
                </span>
              </div>

              <p className="text-green-600 font-semibold mt-2">
                You save ₹
                {product.originalPrice -
                  product.price}
              </p>
            </div>

            {/* QUANTITY */}
            <div className="bg-white rounded-3xl p-5 flex items-center justify-between">

              <h3 className="font-semibold text-lg">
                Quantity
              </h3>

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"
                >
                  <Minus size={18} />
                </button>

                <span className="text-xl font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="grid grid-cols-2 gap-4">

              <button onClick={() => {

  const success =
    addToCart();

  // STOP IF NOT LOGGED IN
  if (!success) return;

  navigate("/cart");
}}
                className="bg-[#0d8bd7] hover:bg-[#0a7cc3] text-white h-14 rounded-2xl font-semibold flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add To Cart
              </button>

              <button
                onClick={buyNow}
                className="bg-[#08245c] text-white h-14 rounded-2xl font-semibold"
              >
                Buy Now
              </button>
            </div>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-3 gap-4">

              <div className="bg-white rounded-3xl p-5 text-center">

                <Truck className="mx-auto text-blue-600" />

                <h3 className="font-semibold mt-3">
                  Fast Delivery
                </h3>

                <p className="text-sm text-gray-500">
                  2-5 Days
                </p>
              </div>

              <div className="bg-white rounded-3xl p-5 text-center">

                <ShieldCheck className="mx-auto text-blue-600" />

                <h3 className="font-semibold mt-3">
                  Warranty
                </h3>

                <p className="text-sm text-gray-500">
                  6 Months
                </p>
              </div>

              <div className="bg-white rounded-3xl p-5 text-center">

                <RotateCcw className="mx-auto text-blue-600" />

                <h3 className="font-semibold mt-3">
                  Easy Return
                </h3>

                <p className="text-sm text-gray-500">
                  7 Days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-16">

          <div className="flex items-center justify-between mb-8">

            <div>
              <p className="text-cyan-500 font-semibold uppercase tracking-[0.2em] text-sm mb-2">
                You May Also Like
              </p>

              <h2 className="text-4xl font-black text-[#08245c]">
                Related Products
              </h2>
            </div>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {relatedProducts.map((item) => (

              <div
                key={item.id}
                onClick={() =>
                  navigate(`/product/${item.id}`)
                }
                className="group relative bg-white rounded-[28px] overflow-hidden border border-slate-200 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(2,19,59,0.12)] transition-all duration-500 cursor-pointer"
              >

                {/* IMAGE */}
                <div className="relative bg-gradient-to-br from-[#E0F2FE] via-[#ECFEFF] to-[#DCFCE7] h-[240px] overflow-hidden flex items-center justify-center p-6">

                  <div className="absolute top-4 left-4 bg-[#08245c] text-white text-xs px-3 py-2 rounded-full font-semibold">
                    Refurbished
                  </div>

                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-2 rounded-full font-bold">
                    -{item.discount}%
                  </div>

                  <img
                    src={item.images[0]}
                    alt=""
                    className="h-[170px] object-contain group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <span className="inline-flex bg-green-100 text-green-700 text-sm px-3 py-1 rounded-md mb-3 font-medium">
                    {item.save}
                  </span>

                  <h3 className="font-bold text-xl line-clamp-2 text-[#08245c]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    {item.category}
                  </p>

                  <div className="flex items-center gap-2 mt-4">

                    <div className="bg-[#FFF7ED] border border-orange-200 px-2 py-1 rounded-md flex items-center gap-1">

                      <span className="text-sm font-bold">
                        {item.rating}
                      </span>

                      <span className="text-yellow-500">
                        ★
                      </span>
                    </div>

                    <span className="text-sm text-slate-500">
                      ({item.reviews} reviews)
                    </span>
                  </div>

                  {/* PRICE */}
                  <div className="flex items-end gap-3 mt-5 mb-5 flex-wrap">

                    <span className="text-3xl font-black text-[#08245c]">
                      ₹{item.price}
                    </span>

                    <span className="line-through text-slate-400">
                      ₹{item.originalPrice}
                    </span>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="button"
                    onClick={(e) => {

                      e.preventDefault();

                      e.stopPropagation();

                      navigate(
                        `/product/${item.id}`
                      );
                    }}
                    className="relative z-20 w-full bg-gradient-to-r from-[#02133B] to-[#0EA5E9] text-white py-3 rounded-2xl font-semibold hover:scale-[1.02] transition-all"
                  >
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex gap-4 md:hidden z-50">

        <button
          onClick={() => {

  const success =
    addToCart();

  if (!success) return;

  navigate("/cart");
}}
          className="flex-1 h-14 rounded-2xl border-2 border-[#08245c] text-[#08245c] font-semibold"
        >
          Add Cart
        </button>

        <button
          onClick={buyNow}
          className="flex-1 h-14 rounded-2xl bg-[#08245c] text-white font-semibold"
        >
          Buy Now
        </button>
      </div>
      {/* REFURBISHED INFO SECTION */}
<div className="mt-20 bg-gradient-to-r from-[#02133B] to-[#0EA5E9] rounded-[36px] overflow-hidden">

  <div className="grid lg:grid-cols-2 gap-10 items-center p-8 lg:p-14">

    {/* LEFT */}
    <div>

      <p className="uppercase tracking-[0.25em] text-cyan-200 text-sm font-semibold mb-4">
        Certified Refurbished
      </p>

      <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
        What Does
        <br />
        Refurbished Mean?
      </h2>

      <p className="text-slate-200 text-lg leading-8 mb-8">
        At RUPANTAR, refurbished products are professionally tested,
        repaired, cleaned and quality-checked before resale.
        Every product goes through performance testing,
        hardware inspection and deep cleaning to ensure
        reliability and excellent working condition.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">

          <h3 className="text-white font-bold text-lg mb-2">
            Quality Tested
          </h3>

          <p className="text-slate-300 text-sm leading-7">
            Every product is manually inspected by experts.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">

          <h3 className="text-white font-bold text-lg mb-2">
            Warranty Included
          </h3>

          <p className="text-slate-300 text-sm leading-7">
            Products include warranty & return support.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT */}
    <div className="relative">

      <img
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop"
        alt=""
        className="rounded-[30px] h-[450px] w-full object-cover"
      />

      <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-xl">

        <h3 className="text-4xl font-black text-[#02133B]">
          10,000+
        </h3>

        <p className="text-slate-500 mt-1">
          Products Successfully Refurbished
        </p>
      </div>
    </div>
  </div>
</div>

{/* REVIEWS SECTION */}
{/* PREMIUM REVIEWS SECTION */}
<div className="mt-24">

  {/* HEADER */}
  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

    <div>

      <p className="text-cyan-500 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
        Customer Feedback
      </p>

      <h2 className="text-5xl lg:text-6xl font-black text-[#02133B] leading-tight">
        Trusted By
        <br />
        Thousands
      </h2>
    </div>

    {/* STATS */}
    <div className="bg-white border border-slate-200 rounded-[30px] px-8 py-6 shadow-sm">

      <div className="flex items-center gap-5">

        <div className="flex -space-x-3">

          {[
            "https://randomuser.me/api/portraits/men/32.jpg",
            "https://randomuser.me/api/portraits/women/44.jpg",
            "https://randomuser.me/api/portraits/men/68.jpg",
          ].map((img, index) => (

            <img
              key={index}
              src={img}
              alt=""
              className="w-14 h-14 rounded-full border-4 border-white object-cover"
            />
          ))}
        </div>

        <div>

          <div className="flex items-center gap-1 mb-1">

            {[1, 2, 3, 4, 5].map((star) => (

              <Star
                key={star}
                size={18}
                fill="#facc15"
                className="text-yellow-400"
              />
            ))}
          </div>

          <h3 className="text-2xl font-black text-[#02133B]">
            4.9/5 Rating
          </h3>

          <p className="text-slate-500 text-sm">
            Based on 2,000+ verified reviews
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* REVIEW GRID */}
  <div className="grid lg:grid-cols-3 gap-7">

    {[
      {
        name: "Rahul Sharma",
        role: "Startup Founder",
        image:
          "https://randomuser.me/api/portraits/men/32.jpg",

        review:
          "The refurbished desktop quality honestly surprised me. Packaging, performance and delivery everything felt premium.",
      },

      {
        name: "Ankit Verma",
        role: "Business Consultant",
        image:
          "https://randomuser.me/api/portraits/men/68.jpg",

        review:
          "Bought a refurbished laptop for office work and it feels almost brand new. Great support team and smooth experience.",
      },

      {
        name: "Priya Singh",
        role: "Office Manager",
        image:
          "https://randomuser.me/api/portraits/women/44.jpg",

        review:
          "Excellent office furniture quality and very affordable pricing. Delivery was fast and setup was easy.",
      },
    ].map((review, index) => (

      <div
        key={index}
        className="group relative bg-white border border-slate-200 rounded-[34px] p-8 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(2,19,59,0.08)] transition-all duration-500 overflow-hidden"
      >

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-cyan-100 blur-[90px] opacity-0 group-hover:opacity-100 transition duration-500 rounded-full" />

        {/* TOP */}
        <div className="relative z-10 flex items-center justify-between mb-7">

          {/* USER */}
          <div className="flex items-center gap-4">

            <img
              src={review.image}
              alt=""
              className="w-16 h-16 rounded-full object-cover"
            />

            <div>

              <h3 className="font-black text-xl text-[#02133B]">
                {review.name}
              </h3>

              <p className="text-slate-500 text-sm">
                {review.role}
              </p>
            </div>
          </div>

          {/* VERIFIED */}
          <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-2 rounded-full">
            Verified
          </div>
        </div>

        {/* STARS */}
        <div className="flex items-center gap-1 mb-6">

          {[1, 2, 3, 4, 5].map((star) => (

            <Star
              key={star}
              size={20}
              fill="#facc15"
              className="text-yellow-400"
            />
          ))}
        </div>

        {/* REVIEW */}
        <p className="relative z-10 text-slate-600 leading-9 text-lg">
          "{review.review}"
        </p>
      </div>
    ))}
  </div>
</div>

{/* PREMIUM FAQ SECTION */}
<div className="mt-24 mb-16">

  {/* HEADER */}
  <div className="text-center max-w-3xl mx-auto mb-14">

    <p className="text-cyan-500 font-semibold uppercase tracking-[0.3em] text-sm mb-4">
      Need Help?
    </p>

    <h2 className="text-5xl lg:text-6xl font-black text-[#02133B] leading-tight mb-6">
      Frequently Asked
      <br />
      Questions
    </h2>

    <p className="text-slate-500 text-lg leading-8">
      Everything you need to know about refurbished products,
      warranty, delivery and returns at RUPANTAR.
    </p>
  </div>

  {/* FAQ LIST */}
  <div className="max-w-5xl mx-auto space-y-5">

    {[
      {
        question:
          "Are refurbished products reliable?",

        answer:
          "Yes. Every product goes through professional testing, hardware inspection, cleaning and quality checks before resale.",
      },

      {
        question:
          "Do products include warranty?",

        answer:
          "Yes. Most products include 3 to 6 months warranty depending on the category and condition.",
      },

      {
        question:
          "Can I return the product?",

        answer:
          "Absolutely. We provide a 7-day return policy for eligible products if there is any issue.",
      },

      {
        question:
          "How long does delivery take?",

        answer:
          "Orders are usually delivered within 2-5 business days across India with secure packaging.",
      },

      {
        question:
          "Are accessories included?",

        answer:
          "Yes. Most desktops and laptops include essential accessories unless otherwise specified.",
      },
    ].map((faq, index) => (

      <details
        key={index}
        className="group bg-white border border-slate-200 rounded-[30px] overflow-hidden shadow-sm transition-all duration-300"
      >

        {/* QUESTION */}
        <summary className="flex items-center justify-between gap-5 cursor-pointer list-none p-7">

          <h3 className="text-xl lg:text-2xl font-black text-[#02133B]">
            {faq.question}
          </h3>

          {/* ICON */}
          <div className="min-w-[52px] h-[52px] rounded-2xl bg-slate-100 flex items-center justify-center text-3xl font-light text-[#02133B] transition-all duration-300 group-open:rotate-45 group-open:bg-cyan-500 group-open:text-white">
            +
          </div>
        </summary>

        {/* ANSWER */}
        <div className="px-7 pb-7">

          <div className="h-px bg-slate-100 mb-6" />

          <p className="text-slate-600 text-lg leading-9 max-w-4xl">
            {faq.answer}
          </p>
        </div>
      </details>
    ))}
  </div>
</div>
{/* LOGIN MODAL */}
{showLogin && (

  <LoginPage
    setShowLogin={
      setShowLogin
    }
  />
)}
    </div>
  );
}