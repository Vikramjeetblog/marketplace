export const validateAddress = (
  formData
) => {
  const errors = {};

  // CLEAN VALUES
  const pincode =
    formData.pincode.trim();

  const flat =
    formData.flat.trim();

  const address =
    formData.address.trim();

  const phone =
    formData.phone.trim();

  const alternatePhone =
    formData.alternatePhone.trim();

  /*
   -----------------------------
   PINCODE
   -----------------------------
  */
  if (!pincode) {
    errors.pincode =
      "Pincode is required";
  } else if (
    !/^\d{6}$/.test(pincode)
  ) {
    errors.pincode =
      "Enter a valid 6 digit pincode";
  }

  /*
   -----------------------------
   FLAT / HOUSE
   -----------------------------
  */
  if (!flat) {
    errors.flat =
      "Flat / House No is required";
  } else if (flat.length < 2) {
    errors.flat =
      "Please enter valid flat details";
  }

  /*
   -----------------------------
   ADDRESS
   -----------------------------
  */
  if (!address) {
    errors.address =
      "Area / Street is required";
  } else if (
    address.length < 8
  ) {
    errors.address =
      "Please enter complete address";
  }

  /*
   -----------------------------
   PHONE
   -----------------------------
  */
  if (!phone) {
    errors.phone =
      "Phone number is required";
  } else if (
    !/^[6-9]\d{9}$/.test(phone)
  ) {
    errors.phone =
      "Enter a valid 10 digit phone number";
  }

  /*
   -----------------------------
   ALTERNATE PHONE
   -----------------------------
  */
  if (
    alternatePhone &&
    !/^[6-9]\d{9}$/.test(
      alternatePhone
    )
  ) {
    errors.alternatePhone =
      "Enter a valid alternate number";
  }

  return errors;
};