const express = require('express');
const {userRegisterCtrl, 
    userLoginCtrl,
    userProfileCtrl,
    userUsersCtrl,
    userDeleteCtrl,
    userUpdate } = 
    require('../../controller/Users/userController')

const userRouter = express.Router();

userRouter.post("/register", userRegisterCtrl);

userRouter.post("/login", userLoginCtrl);



userRouter.get("/profile/:id", userProfileCtrl);


userRouter.get("/", userUsersCtrl);


userRouter.delete("/:id", userDeleteCtrl);



userRouter.put("/:id", userUpdate);





module.exports = userRouter;