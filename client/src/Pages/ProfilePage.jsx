import React, { Fragment, useCallback, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Badge } from "flowbite-react";
import { motion } from "framer-motion";
import { Tabs } from "flowbite-react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
import ImageUploader from "../components/ImageUploader";
import Leaderboard from "../components/Leaderboard";
import axios from "axios";
import { getUserRoute } from "../utils/APIRoutes";

const ProfileDiv = {
  hidden: {
    opacity: 0,
    x: "-15vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 0.8,
    },
  },
};

const FeatureDiv = {
  hidden: {
    opacity: 0,
    x: "+15vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 0.8,
    },
  },
};

function ProfilePage() {
  const [details, setDetails] = useState({});
  const token = localStorage.getItem("token");
  const decode = jwt_decode(token);

  const GetUserDetails = useCallback(async () => {
    try {
      const { data } = await axios.post(getUserRoute, { email: decode.email });
      setDetails(data[0]);
    } catch (error) {
      console.log(error);
    }
  }, [decode.email]);

  useEffect(() => {
    GetUserDetails();
  }, [GetUserDetails]);

  return (
    <Fragment>
      <div className="grid grid-cols-4 gap-x-10">
        <motion.div
          className="col-span-1 flex-col items-center justify-center"
          variants={ProfileDiv}
          initial="hidden"
          animate="visible"
        >
          <img
            className="h-52 w-52 rounded-full mx-auto"
            src={Object.keys(details).length !== 0 ? details.pfp : ""}
            alt=""
          />
          <p className="flex items-center justify-center text-4xl pt-4 pb-2 font-bold">
            {Object.keys(details).length !== 0 ? details.name : "Loading..."}
          </p>
          <p className="flex items-center justify-center text-xs pb-3">
            {Object.keys(details).length !== 0 ? details.email : ""}
          </p>
          <p className="flex items-center justify-center text-base py-2">
            {Object.keys(details).length !== 0 ? details.address : ""}
          </p>
          <span className="flex items-center justify-center">
            <Badge
              color="success"
              className="mt-5 flex justify-center items-center rounded-full"
            >
              Contributions:{" "}
              {Object.keys(details).length !== 0 ? details.recyclable : "0"}
            </Badge>
          </span>
        </motion.div>
        <motion.div
          className="col-span-3 mt-10"
          variants={FeatureDiv}
          initial="hidden"
          animate="visible"
        >
          <Tabs.Group aria-label="Tabs with underline" style="underline">
            <Tabs.Item icon={MdLeaderboard} title="Leaderboard">
              <Leaderboard />
            </Tabs.Item>

            <Tabs.Item icon={AiOutlineCloudUpload} title="Uploader">
              <div className="flex flex-col">
                <p>
                  Want to add more value to the society? Upload your waste and
                  and let us guide you about its final destination!
                </p>
                <ImageUploader userId={details._id} />
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </motion.div>
      </div>
    </Fragment>
  );
}

export default ProfilePage;
