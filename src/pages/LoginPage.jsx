import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  X,
} from "lucide-react";

const LoginPage = ({ setShowLogin, setIsLoggedIn, setUser, }) => {
  const [step, setStep] = useState(1);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    email: "",
    otp: "",
  });

  const DEMO_OTP = "123456";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handlePhoneSubmit = () => {
    if (formData.phone.length < 10) {
      setError("Please enter valid mobile number");
      return;
    }

    setStep(2);
  };

  const handleDetailsSubmit = () => {
    if (!formData.name || !formData.email) {
      setError("Please fill all details");
      return;
    }

    setStep(3);
  };

  const handleVerifyOTP = () => {
  if (formData.otp !== DEMO_OTP) {
    setError("Invalid OTP. Use 123456");
    return;
  }

  const userData = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
  };

  localStorage.setItem(
    "rupantarUser",
    JSON.stringify(userData)
  );

  if (setUser) {
    setUser(userData);
  }

  if (setIsLoggedIn) {
    setIsLoggedIn(true);
  }

  setShowLogin(false);
};

  return (
    <div className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">

      <div className="relative w-full max-w-[1080px] min-h-[320px] bg-white rounded-[36px] overflow-hidden shadow-[0_40px_120px_rgba(2,11,45,0.22)] grid lg:grid-cols-[500px_1fr]">

        {/* CLOSE BUTTON */}
       

        {/* LEFT SIDE */}
        <div className="hidden lg:flex relative overflow-hidden bg-[#020B2D]">

          {/* SINGLE IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
            alt="workspace"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* BRAND OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#43C6B8]/80 via-[#020B2D]/60 to-[#031B4E]/95" />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col justify-between h-full px-14 py-16 text-white">

            <div>

              {/* LOGO */}
              <div className="flex items-center gap-4 mb-20">

                <div className="w-16 h-16 rounded-[22px] bg-white flex items-center justify-center text-[#020B2D] font-black text-3xl shadow-xl">
                  R
                </div>

                <div>

                  <h1 className="text-[42px] leading-none font-black tracking-tight">
                    RUPANTAR
                  </h1>

                  <p className="text-[11px] tracking-[0.34em] uppercase font-semibold text-[#D7FFF8] mt-2">
                    BUY SMART. SELL EASY.
                  </p>
                </div>
              </div>

              {/* TITLE */}
              <h2 className="text-[52px] leading-[0.95] font-black tracking-tight mb-10">
                Trusted
                <br />
                Recommerce
                <br />
                Platform
              </h2>

              {/* DESCRIPTION */}
              <p className="text-[20px] leading-relaxed text-[#E2FDF8] max-w-sm font-medium">
                Buy and sell office furniture, laptops and workspace assets with confidence.
              </p>
            </div>

            {/* BOTTOM INDICATOR */}
            <div className="flex items-center gap-3">

              <div className="w-3 h-3 rounded-full bg-white" />

              <div className="w-3 h-3 rounded-full bg-white/40" />

              <div className="w-3 h-3 rounded-full bg-white/40" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white px-10 sm:px-16 lg:px-20 py-16 flex items-center justify-center">

          <div className="w-full max-w-md mx-auto">

            {/* MOBILE BRAND */}
            <div className="lg:hidden flex items-center gap-3 mb-12">

              <div className="w-12 h-12 rounded-2xl bg-[#43C6B8] text-white flex items-center justify-center font-black text-xl">
                R
              </div>

              <div>

                <h1 className="text-3xl font-black text-[#020B2D]">
                  RUPANTAR
                </h1>

                <p className="text-[10px] tracking-[0.28em] uppercase font-semibold text-[#43C6B8]">
                  BUY SMART. SELL EASY.
                </p>
              </div>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <div className="mb-14">

                  <h2 className="text-[44px] leading-none font-black tracking-tight text-[#020B2D] mb-5">
                    Login
                  </h2>

                  <p className="text-[#64748B] text-[16px] leading-relaxed">
                    Enter your mobile number to continue.
                  </p>
                </div>

                {/* PHONE */}
                <div className="mb-12">

                  <label className="block text-[15px] font-bold text-[#020B2D] mb-5">
                    Mobile Number
                  </label>

                  <div className="flex items-center border-b-2 border-[#CBD5E1] pb-5">

                    <span className="text-[34px] font-bold text-[#020B2D] mr-5">
                      +91
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      className="w-full bg-transparent outline-none text-[28px] text-[#020B2D] placeholder:text-[#94A3B8] font-medium"
                    />
                  </div>
                </div>

                {/* TERMS */}
                <div className="flex items-start gap-3 mb-12">

                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-1 accent-[#43C6B8]"
                  />

                  <p className="text-[15px] text-[#64748B] leading-relaxed">
                    I agree to the{" "}
                    <span className="text-[#43C6B8] font-semibold">
                      Terms & Conditions
                    </span>{" "}
                    and{" "}
                    <span className="text-[#43C6B8] font-semibold">
                      Privacy Policy
                    </span>
                  </p>
                </div>

                {/* ERROR */}
                {error && (
                  <p className="text-red-500 text-sm mb-6">
                    {error}
                  </p>
                )}

                {/* BUTTON */}
                <button
                  onClick={handlePhoneSubmit}
                  className="w-full h-[68px] rounded-[22px] bg-[#43C6B8] hover:bg-[#36b5a8] text-white font-bold text-[20px] flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(67,198,184,0.35)]"
                >
                  Continue
                  <ArrowRight size={22} />
                </button>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <div className="mb-14">

                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 text-[15px] text-[#64748B] mb-8"
                  >
                    <ArrowLeft size={18} />
                    Back
                  </button>

                  <h2 className="text-[58px] leading-none font-black tracking-tight text-[#020B2D] mb-5">
                    Your Details
                  </h2>

                  <p className="text-[#64748B] text-[18px] leading-relaxed">
                    Complete your account information.
                  </p>
                </div>

                <div className="space-y-7">

                  {/* NAME */}
                  <div>

                    <label className="block text-[15px] font-bold text-[#020B2D] mb-4">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full h-[68px] rounded-[22px] border border-[#DCE3EA] px-6 text-[18px] outline-none focus:border-[#43C6B8]"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>

                    <label className="block text-[15px] font-bold text-[#020B2D] mb-4">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full h-[68px] rounded-[22px] border border-[#DCE3EA] px-6 text-[18px] outline-none focus:border-[#43C6B8]"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-500 text-sm mt-5">
                    {error}
                  </p>
                )}

                <button
                  onClick={handleDetailsSubmit}
                  className="w-full mt-10 h-[68px] rounded-[22px] bg-[#43C6B8] hover:bg-[#36b5a8] text-white font-bold text-[20px] flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(67,198,184,0.35)]"
                >
                  Continue
                  <ArrowRight size={22} />
                </button>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <div className="mb-14">

                  <button
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 text-[15px] text-[#64748B] mb-8"
                  >
                    <ArrowLeft size={18} />
                    Back
                  </button>

                  <h2 className="text-[58px] leading-none font-black tracking-tight text-[#020B2D] mb-5">
                    Verify OTP
                  </h2>

                  <p className="text-[#64748B] text-[18px] leading-relaxed">
                    Enter the OTP sent to +91 {formData.phone}
                  </p>
                </div>

                {/* OTP */}
                <div className="mb-5">

                  <label className="block text-[15px] font-bold text-[#020B2D] mb-4">
                    OTP Verification
                  </label>

                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    placeholder="123456"
                    className="w-full h-[72px] rounded-[22px] border border-[#DCE3EA] px-6 text-[34px] tracking-[0.35em] outline-none focus:border-[#43C6B8]"
                  />
                </div>

                {/* DEMO OTP */}
                <div className="mb-8">

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E7FAF7] text-[#1E9E90] text-sm font-semibold">
                    Demo OTP : 123456
                  </div>
                </div>

                {error && (
                  <p className="text-red-500 text-sm mb-5">
                    {error}
                  </p>
                )}

                {/* RESEND */}
                <div className="flex items-center justify-between mb-10">

                  <p className="text-[15px] text-[#64748B]">
                    Didn’t receive OTP?
                  </p>

                  <button className="text-[15px] font-semibold text-[#43C6B8]">
                    Resend
                  </button>
                </div>

                {/* BUTTON */}
                <button
                  onClick={handleVerifyOTP}
                  className="w-full h-[68px] rounded-[22px] bg-[#43C6B8] hover:bg-[#36b5a8] text-white font-bold text-[20px] flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(67,198,184,0.35)]"
                >
                  Verify & Login
                  <ArrowRight size={22} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;