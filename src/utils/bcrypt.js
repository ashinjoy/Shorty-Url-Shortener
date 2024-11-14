import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRound = 10;
    return await bcrypt.hash(password, saltRound);
  } catch (error) {
    throw error;
  }
};

export const comparePassword = async (enteredPassword, password) => {
  try {
    console.log('hi',enteredPassword,password);
    
    return await bcrypt.compare(enteredPassword, password);
  } catch (error) {
    console.log('bi');
    
    throw error;
  }
};
