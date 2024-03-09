import express from "express"
import {
    createRoom,
    deleteRoom,
    getRoom,
    getRooms,
    updateRoom,
    updateRoomAvailability,
    
  } from "../controllers/room.js";
  import { verifyAdmin } from "../utils/verifyToken.js";
const router =express.Router()
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE

router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.put("availability/:id", updateRoomAvailability );
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

export default router