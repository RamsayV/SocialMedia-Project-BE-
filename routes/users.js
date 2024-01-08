import express from "express"
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js"
import { verifyToken} from "../middleware/auth.js"
import pkg from 'jsonwebtoken'



const router = express.Router()
const { verify } = pkg

// READ
router.get("/:id", verifyToken, getUser)
router.get("/:id/friends", verifyToken, getUserFriends)

// UPDATE
router.patch("/:id/:friendId", verifyToken)


export default router