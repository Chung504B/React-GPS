import authService from "../Map/auth.service";

export const requireData = async () => {
  try {
    let response = await authService.overspeed();
    console.log(response);
    // localStorage.setItem("user", JSON.stringify(response.data));
    // window.alert("登入成功。您現在將被重新導向到個人資料頁面。");
    // await setCurrentUser(AuthService.getCurrentUser());
    // nagivate("/profile");
  } catch (e) {
    setMessage(e.response.data);
  }
};

export const test2 = {
  // type: "FeatureCollection",
  features: [
    {
      geometry: { coordinates: [121.024322, 24.825369], type: "point" },
      properties: {
        road: " 莊敬​北​路 ",
        carSpeed: 80,
        speedLimit: 50,
        GPStime: "Wed, 24 May 2023 10:10:42 GMT",
        overSpeedLimit: "Serious_Violation",
      },
      type: "Feature",
      _id: "",
      __v: 0,
    },
  ],
};
