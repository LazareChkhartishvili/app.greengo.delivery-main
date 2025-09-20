export const generateToastMessage = (isSuccess: boolean) => {
  let successMessage = isSuccess ? 'წარმატებით შესრულდა' : 'დაფიქსირდა შეცდომა';

  return ` ${successMessage}`;
};
