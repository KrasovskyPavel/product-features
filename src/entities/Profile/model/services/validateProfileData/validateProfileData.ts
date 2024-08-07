import { Profile, ValidateProfileError } from "../../types/profile";

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }
  const { first, lastname, username, age, city } = profile;

  const errors: ValidateProfileError[] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!username) {
    errors.push(ValidateProfileError.INCORRECT_USER_USERNAME);
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_USER_CITY);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_USER_AGE);
  }

  return errors;
};
