const { z } = require("zod");

const signUpSchema = z.object({
  username: z
    .string({ required_error: "Name is require" })
    .trim()
    .min(3, { message: "Name must be at least 3 character" })
    .max(255, { message: "Name must not be more than 255 character." }),
  email: z
    .string({ required_error: "Email is require" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 character" })
    .max(255, { message: "Email must not be more than 255 character." }),
  phone: z
    .string({ required_error: "Phone is require" })
    .trim()
    .min(10, { message: "Phone must be at least 10 character" })
    .max(20, { message: "Phone must not be more than 20 character." }),
  password: z
    .string({ required_error: "Password is require" })
    .min(7, { message: "Password must be at least 3 character" })
    .max(1024, { message: "Password must not be more than 255 character." }),
});

module.exports = signUpSchema;
