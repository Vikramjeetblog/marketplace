import { create } from "zustand";

// Default initial state
const defaultSellFlow = {
  currentStep: 1,
  selectedCategory: null,
  selectedBrand: null,
  selectedModel: null,
  selectedSpecifications: {},
  selectedCondition: {},
  estimatedPrice: 0,
  selectedQuote: null,
  uploadedImages: [],
};

// Helper function to save data to localStorage
const saveToLocalStorage = (data) => {
  localStorage.setItem("rupantarSellFlow", JSON.stringify(data));
};

const useSellStore = create((set) => ({
  // Load saved data or use default
  ... (JSON.parse(localStorage.getItem("rupantarSellFlow")) || defaultSellFlow),

  // ========================
  // STEP CONTROL
  // ========================

  setCurrentStep: (step) => {
    set((state) => {
      const updated = { ...state, currentStep: step };
      saveToLocalStorage(updated);
      return updated;
    });
  },

  nextStep: () => {
    set((state) => {
      const updated = { ...state, currentStep: state.currentStep + 1 };
      saveToLocalStorage(updated);
      return updated;
    });
  },

  prevStep: () => {
    set((state) => {
      const updated = {
        ...state,
        currentStep: state.currentStep > 1 ? state.currentStep - 1 : 1,
      };
      saveToLocalStorage(updated);
      return updated;
    });
  },

  // ========================
  // CATEGORY
  // ========================

  setCategory: (category) => {
    set((state) => {
      const updated = {
        ...state,
        currentStep: 1,
        selectedCategory: category,
        // Reset all lower steps when category changes
        selectedBrand: null,
        selectedModel: null,
        selectedSpecifications: {},
        selectedCondition: {},
        estimatedPrice: 0,
        selectedQuote: null,
        uploadedImages: [],
      };
      saveToLocalStorage(updated);
      return updated;
    });
  },

  // ========================
  // BRAND & MODEL
  // ========================

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

  // ========================
  // SPECIFICATIONS & CONDITION
  // ========================

  setSpecifications: (specifications) => {
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

  setCondition: (condition) => {
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

  // ========================
  // PRICE & QUOTE
  // ========================

  setEstimatedPrice: (price) => {
    set((state) => {
      const updated = { ...state, estimatedPrice: price };
      saveToLocalStorage(updated);
      return updated;
    });
  },

  setSelectedQuote: (quote) => {
    set((state) => {
      const updated = { ...state, selectedQuote: quote };
      saveToLocalStorage(updated);
      return updated;
    });
  },

  // ========================
  // IMAGES
  // ========================

  setUploadedImages: (images) => {
    set((state) => {
      const updated = { ...state, uploadedImages: images };
      saveToLocalStorage(updated);
      return updated;
    });
  },

  // ========================
  // RESET
  // ========================

  resetSellFlow: () => {
    localStorage.removeItem("rupantarSellFlow");
    set(defaultSellFlow);
  },
}));

export default useSellStore;