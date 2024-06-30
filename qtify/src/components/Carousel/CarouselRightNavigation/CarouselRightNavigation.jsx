// import React, { useEffect, useState } from "react";
// import { useSwiper } from "swiper/react";
// import styles from "./CarouselRightNavigation.module.css";
// import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

// export default function CarouselLeftNavigation() {
//   const swiper = useSwiper();
//   const [isEnd, setIsEnd] = useState(swiper.isEnd);

//   useEffect(() => {
//     swiper.on("slideChange", function () {
//       setIsEnd(swiper.isBeginning);
//     });
//   }, []);

//   return (
//     <div className={styles.rightNavigation}>
//       {!isEnd && <RightArrow onclick={() => swiper.slideNext()} />}
//     </div>
//   );
// }

import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg"; // Update the path as necessary

export default function CarouselRightNavigation() {
  const swiper = useSwiper();

  return (
    <div className={styles.rightNavigation}>
      <RightArrow onClick={() => swiper.slideNext()} />
    </div>
  );
}
