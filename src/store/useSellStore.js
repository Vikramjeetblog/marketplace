
import { create } from "zustand";

// DEFAULT STATE
const defaultSellFlow = {

  // STEP ENGINE
  currentStep: 1,

  // CATEGORY
  selectedCategory: null,

  // BRAND
  selectedBrand: null,

  // MODEL
  selectedModel: null,

  // SPECIFICATIONS
  selectedSpecifications: {},

  // CONDITION
  selectedCondition: {},

  // PRICE
  estimatedPrice: 0,

  selectedQuote: null,

  // UPLOADS
  uploadedImages: [],

};

// LOAD SAVED FLOW
const savedSellFlow =
  JSON.parse(
    localStorage.getItem(
      "rupantarSellFlow"
    )
  ) || defaultSellFlow;

// SAVE HELPER
const saveToLocalStorage = (
  data
) => {

  localStorage.setItem(
    "rupantarSellFlow",
    JSON.stringify(data)
  );
};

const useSellStore = create(
  (set) => ({

    // STATE
    ...savedSellFlow,

    // =========================
    // STEP ENGINE
    // =========================

    // SET STEP
    setCurrentStep: (step) => {

      set((state) => {

        const updated = {
          ...state,
          currentStep: step,
        };

        saveToLocalStorage(
          updated
        );

        return updated;
      });
    },

    // NEXT STEP
    nextStep: () => {

      set((state) => {

        const updated = {
          ...state,
          currentStep:
            state.currentStep + 1,
        };

        saveToLocalStorage(
          updated
        );

        return updated;
      });
    },

    // PREVIOUS STEP
    prevStep: () => {

      set((state) => {

        const updated = {
          ...state,
          currentStep:
            state.currentStep > 1
              ? state.currentStep - 1
              : 1,
        };

        saveToLocalStorage(
          updated
        );

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

          // RESET FLOW
          currentStep: 1,

          // NEW CATEGORY
          selectedCategory:
            category,

          // RESET DEPENDENT DATA
          selectedBrand: null,

          selectedModel: null,

          selectedSpecifications:
            {},

          selectedCondition: {},

          estimatedPrice: 0,

          selectedQuote: null,

          uploadedImages: [],
        };

        saveToLocalStorage(
          updated
        );

        return updated;
      });
    },

    // =========================
    // BRAND
    // =========================

    setBrand: (brand) => {

      set((state) => {

        const updated = {

          ...state,

          selectedBrand:
            brand,

          // RESET LOWER STEPS
          selectedModel: null,

          selectedCondition:
            {},

          estimatedPrice: 0,
        };

        saveToLocalStorage(
          updated
        );

        return updated;
      });
    },

    // =========================
    // MODEL
    // =========================

    setModel: (model) => {

      set((state) => {

        const updated = {

          ...state,

          selectedModel:
            model,

          selectedCondition:
            {},

          estimatedPrice: 0,
        };

        saveToLocalStorage(
          updated
        );

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

          selectedSpecifications:
            {
              ...state.selectedSpecifications,

              ...specifications,
            },
        };

        saveToLocalStorage(
          updated
        );

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

        saveToLocalStorage(
          updated
        );

        return updated;
      });
    },

    // =========================
    // PRICE
    // =========================

    setEstimatedPrice: (
      price
    ) => {

      set((state) => {

        const updated = {

          ...state,

          estimatedPrice:
            price,
        };

        saveToLocalStorage(
          updated
        );

        return updated;
      });
    },

    // SET QUOTE
    setSelectedQuote: (
      quote
    ) => {

      set((state) => {

        const updated = {

          ...state,

          selectedQuote:
            quote,
        };

        saveToLocalStorage(
          updated
        );

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

          uploadedImages:
            images,
        };

        saveToLocalStorage(
          updated
        );

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

  })
);

export default useSellStore;

