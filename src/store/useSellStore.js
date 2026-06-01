import { create } from "zustand";

// =========================
// DEFAULT STATE
// =========================

const defaultSellFlow = {
  currentStep: 1,

  // CATEGORY
  selectedCategory: null,

  // STRUCTURED FLOW
  selectedBrand: null,
  selectedModel: null,
  selectedSpecifications: {},
  selectedCondition: {},
  estimatedPrice: 0,
  selectedQuote: null,

  // SHARED
  uploadedImages: [],

  // GUIDED FLOW
  guidedDetails: {
    title: "",
    brand: "",
    age: "",
    description: "",
    condition: "",
    expectedPrice: "",
  },
};

// =========================
// LOAD SAVED DATA SAFELY
// =========================

const savedData =
  JSON.parse(
    localStorage.getItem(
      "rupantarSellFlow"
    )
  ) || {};

const initialState = {
  ...defaultSellFlow,
  ...savedData,

  guidedDetails: {
    ...defaultSellFlow.guidedDetails,
    ...(savedData.guidedDetails || {}),
  },
};

// =========================
// STORAGE HELPER
// =========================

const saveToLocalStorage = (data) => {
  localStorage.setItem(
    "rupantarSellFlow",
    JSON.stringify(data)
  );
};

// =========================
// STORE
// =========================

const useSellStore = create((set) => ({
  ...initialState,

  // =========================
  // STEP CONTROL
  // =========================

  setCurrentStep: (step) => {
    set((state) => {
      const updated = {
        ...state,
        currentStep: step,
      };

      saveToLocalStorage(updated);

      return updated;
    });
  },

  nextStep: () => {
    set((state) => {
      const updated = {
        ...state,
        currentStep:
          state.currentStep + 1,
      };

      saveToLocalStorage(updated);

      return updated;
    });
  },

  prevStep: () => {
    set((state) => {
      const updated = {
        ...state,
        currentStep:
          state.currentStep > 1
            ? state.currentStep - 1
            : 1,
      };

      saveToLocalStorage(updated);

      return updated;
    });
  },

  // =========================
  // CATEGORY
  // =========================

  setCategory: (category) => {
    set((state) => {
      const updated = {
        ...state,

        currentStep: 1,

        selectedCategory:
          category,

        selectedBrand: null,
        selectedModel: null,

        selectedSpecifications:
          {},

        selectedCondition: {},

        estimatedPrice: 0,

        selectedQuote: null,

        uploadedImages: [],

        guidedDetails: {
          title: "",
          brand: "",
          age: "",
          description: "",
          condition: "",
          expectedPrice: "",
        },
      };

      saveToLocalStorage(updated);

      return updated;
    });
  },

  // =========================
  // BRAND & MODEL
  // =========================

  setBrand: (brand) => {
    set((state) => {
      const updated = {
        ...state,
        selectedBrand: brand,
        selectedModel: null,
        selectedCondition: {},
        estimatedPrice: 0,
      };

      saveToLocalStorage(updated);

      return updated;
    });
  },

  setModel: (model) => {
    set((state) => {
      const updated = {
        ...state,
        selectedModel: model,
        selectedCondition: {},
        estimatedPrice: 0,
      };

      saveToLocalStorage(updated);

      return updated;
    });
  },

  // =========================
  // SPECIFICATIONS
  // =========================

  setSpecifications: (
    specifications
  ) => {
    set((state) => {
      const updated = {
        ...state,

        selectedSpecifications: {
          ...state.selectedSpecifications,
          ...specifications,
        },
      };

      saveToLocalStorage(updated);

      return updated;
    });
  },

  // =========================
  // CONDITION
  // =========================

  setCondition: (
    condition
  ) => {
    set((state) => {
      const updated = {
        ...state,

        selectedCondition: {
          ...state.selectedCondition,
          ...condition,
        },
      };

      saveToLocalStorage(updated);

      return updated;
    });
  },

  // =========================
  // PRICE & QUOTE
  // =========================

  setEstimatedPrice: (
    price
  ) => {
    set((state) => {
      const updated = {
        ...state,
        estimatedPrice: price,
      };

      saveToLocalStorage(updated);

      return updated;
    });
  },

  setSelectedQuote: (
    quote
  ) => {
    set((state) => {
      const updated = {
        ...state,
        selectedQuote: quote,
      };

      saveToLocalStorage(updated);

      return updated;
    });
  },

  // =========================
  // IMAGES
  // =========================

  setUploadedImages: (
    images
  ) => {
    set((state) => {
      const updated = {
        ...state,
        uploadedImages: images,
      };

      saveToLocalStorage(updated);

      return updated;
    });
  },

  // =========================
  // GUIDED DETAILS
  // =========================

  setGuidedDetails: (
    details
  ) => {
    set((state) => {
      const updated = {
        ...state,

        guidedDetails: {
          ...state.guidedDetails,
          ...details,
        },
      };

      saveToLocalStorage(updated);

      return updated;
    });
  },

  // =========================
  // RESET
  // =========================

  resetSellFlow: () => {
    localStorage.removeItem(
      "rupantarSellFlow"
    );

    set(defaultSellFlow);
  },
}));

export default useSellStore;