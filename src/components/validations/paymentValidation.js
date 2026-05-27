export const validatePayment =
  (formData) => {
    const errors = {};

    const holderName =
      formData.holderName.trim();

    /*
      -----------------------------
      HOLDER NAME
      -----------------------------
    */
    if (!holderName) {
      errors.holderName =
        "Beneficiary name is required";
    }

    /*
      -----------------------------
      UPI VALIDATION
      -----------------------------
    */
    if (formData.type === "UPI") {
      if (!formData.upiId.trim()) {
        errors.upiId =
          "UPI ID is required";
      } else if (
        !/^[\w.-]+@[\w]+$/.test(
          formData.upiId
        )
      ) {
        errors.upiId =
          "Enter valid UPI ID";
      }
    }

    /*
      -----------------------------
      BANK VALIDATION
      -----------------------------
    */
    if (formData.type === "BANK") {
      if (
        !formData.bankName.trim()
      ) {
        errors.bankName =
          "Bank name is required";
      }

      if (
        !formData.accountNumber.trim()
      ) {
        errors.accountNumber =
          "Account number is required";
      } else if (
        formData.accountNumber
          .length < 8
      ) {
        errors.accountNumber =
          "Enter valid account number";
      }

      if (!formData.ifsc.trim()) {
        errors.ifsc =
          "IFSC code is required";
      } else if (
        !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(
          formData.ifsc.toUpperCase()
        )
      ) {
        errors.ifsc =
          "Enter valid IFSC code";
      }
    }

    return errors;
  };