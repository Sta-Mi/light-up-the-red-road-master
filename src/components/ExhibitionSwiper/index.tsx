import { Image, Swiper, SwiperItem, View } from "@tarojs/components";
import "./index.scss";

/**
 * 展馆轮播图组件(获取父组件传递过来的dataList(点击tab后传递tabKey->调用后端接口->获取dataList)->进行展示))
 */
export default ({ banner, tabKey }) => {
  const autoplay = true;
  const indicatorDots = true;
  const circular = true;
  return (
    <View>
      <Swiper
        className="test-h exhibitionSwiper"
        indicatorColor="#999"
        indicatorActiveColor="#de1f1a"
        circular={circular}
        indicatorDots={indicatorDots}
        autoplay={autoplay}
      >
        {banner && banner.map((item, index) => (
          <SwiperItem key={index}>
            <Image
              className="swiper-img"
              src={item}
            />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
};
