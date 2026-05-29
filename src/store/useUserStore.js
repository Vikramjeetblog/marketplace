import { create } from "zustand";

// =========================
// LOCAL STORAGE DATA
// =========================

// USER
const savedUser =
  JSON.parse(
    localStorage.getItem("rupantarUser")
  ) || null;

// PRODUCTS
const savedProducts =
  JSON.parse(
    localStorage.getItem("savedProducts")
  ) || [];

// ADDRESSES
const savedAddresses =
  JSON.parse(
    localStorage.getItem("savedAddresses")
  ) || [];

// ORDERS
const savedOrders =
  JSON.parse(
    localStorage.getItem("orders")
  ) || [];

// PAYMENT METHODS
const savedPaymentMethods =
  JSON.parse(
    localStorage.getItem("paymentMethods")
  ) || [];

// =========================
// STORE
// =========================

export const useUserStore = create(
  (set) => ({

    // =========================
    // STATES
    // =========================

    user: savedUser,

    orders: savedOrders,
    addOrder: (order) =>
  set((state) => {
    const updated = [
      order,
      ...state.orders,
    ];

    localStorage.setItem(
      "orders",
      JSON.stringify(updated)
    );

    return {
      orders: updated,
    };
  }),
  cancelOrder: (orderId) =>
  set((state) => {
    const updatedOrders = state.orders.map(
      (order) =>
        order.id === orderId
          ? {
              ...order,
              status: "Cancelled",
            }
          : order
    );

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    return {
      orders: updatedOrders,
    };
  }),

    savedProducts: savedProducts,

    addresses: savedAddresses,

    paymentMethods:
      savedPaymentMethods,

    // =========================
    // AUTH
    // =========================

    // LOGIN
    login: (userData) => {
      localStorage.setItem(
        "rupantarUser",
        JSON.stringify(userData)
      );

      set({
        user: userData,
      });
    },

    // UPDATE USER
    updateUser: (
      updatedData
    ) =>
      set((state) => {

        const updatedUser = {
          ...state.user,
          ...updatedData,
        };

        localStorage.setItem(
          "rupantarUser",
          JSON.stringify(updatedUser)
        );

        return {
          user: updatedUser,
        };
      }),

    // LOGOUT
    logout: () => {

  // ONLY LOGOUT SESSION
  set({
    user: null,
  });
},

    // =========================
    // SAVED PRODUCTS
    // =========================

    addSavedProduct: (
      product
    ) =>
      set((state) => {

        const updated = [
          ...state.savedProducts,
          product,
        ];

        localStorage.setItem(
          "savedProducts",
          JSON.stringify(updated)
        );

        return {
          savedProducts:
            updated,
        };
      }),

    removeSavedProduct: (
      id
    ) =>
      set((state) => {

        const updated =
          state.savedProducts.filter(
            (item) =>
              item.id !== id
          );

        localStorage.setItem(
          "savedProducts",
          JSON.stringify(updated)
        );

        return {
          savedProducts:
            updated,
        };
      }),

    // =========================
    // ADDRESSES
    // =========================

    addAddress: (
      address
    ) =>
      set((state) => {

        const updated = [
          ...state.addresses,
          address,
        ];

        localStorage.setItem(
          "savedAddresses",
          JSON.stringify(updated)
        );

        return {
          addresses:
            updated,
        };
      }),

    deleteAddress: (
      id
    ) =>
      set((state) => {

        const updated =
          state.addresses.filter(
            (item) =>
              item.id !== id
          );

        localStorage.setItem(
          "savedAddresses",
          JSON.stringify(updated)
        );

        return {
          addresses:
            updated,
        };
      }),

    updateAddress: (
      updatedAddress
    ) =>
      set((state) => {

        const updated =
          state.addresses.map(
            (item) =>
              item.id ===
              updatedAddress.id
                ? updatedAddress
                : item
          );

        localStorage.setItem(
          "savedAddresses",
          JSON.stringify(updated)
        );

        return {
          addresses:
            updated,
        };
      }),

    // =========================
    // PAYMENT METHODS
    // =========================

    addPaymentMethod: (
      method
    ) =>
      set((state) => {

        const updated = [
          ...state.paymentMethods,
          method,
        ];

        localStorage.setItem(
          "paymentMethods",
          JSON.stringify(updated)
        );

        return {
          paymentMethods:
            updated,
        };
      }),

    deletePaymentMethod: (
      id
    ) =>
      set((state) => {

        const updated =
          state.paymentMethods.filter(
            (item) =>
              item.id !== id
          );

        localStorage.setItem(
          "paymentMethods",
          JSON.stringify(updated)
        );

        return {
          paymentMethods:
            updated,
        };
      }),

    updatePaymentMethod: (
      updatedMethod
    ) =>
      set((state) => {

        const updated =
          state.paymentMethods.map(
            (item) =>
              item.id ===
              updatedMethod.id
                ? updatedMethod
                : item
          );

        localStorage.setItem(
          "paymentMethods",
          JSON.stringify(updated)
        );

        return {
          paymentMethods:
            updated,
        };
      }),
  })
);