import Users from "../models/userModel.js";
export const register = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  //validate fields
  if (!firstname) {
    next("First name is required");
  }
  if (!lastname) {
    next("Last name is required");
  }
  if (!email) {
    next("Email is required");
  }
  if (!password) {
    next("Pssword is required");
  }
  try {
    const userExists = await Users.findOne({ email });
    if (userExists) {
      next("Email already exists");
      return;
    }
    const user = await Users.create({
      firstname,
      lastname,
      email,
      password,
    });

    //create user token
    const token = user.createJWT();
    res.status(201).send({
      success: true,
      message: "Account created successfully",
      user: {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        accountType: user.accountType,
      },
      token:token,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: error.message });
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //validation
    if (!email || !password) {
      next("Please Provide User Credentials");
      return;
    }

    // find user by email
    const user = await Users.findOne({ email }).select("+password");

    if (!user) {
      next("Invalid -email or password");
      return;
    }

    // compare password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      next("Invalid email or password");
      return;
    }

   // user.password = undefined;

    const token = user.createJWT();

    res.status(201).json({
      success: true,
      message: "Login successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};