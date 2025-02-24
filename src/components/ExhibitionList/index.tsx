import {Image, View} from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import "./index.scss";
/**
 * 根据传递过来的tabKey进行数据过滤
 */
export default ({ dataList, tabKey, filterKey }) => {
  type Exhibition = {
    id: number;
    exhibitionName: string;
    categoryId: number;
    eraIdList: number[];
    exhibitionImage: string;
    exhibitionAddress: string;
    exhibitionStartTime: string;
    exhibitionFinishTime: string;
    exhibitionNote: string;
  };
  const [dataListByFilter, setDataListByFilter] = useState<Exhibition[]>([]);
  useEffect(() => {
    //category=1的展馆列表->即对dataList进行过滤->赋值给dataListByFilter
    if (tabKey === 1 && filterKey !== 0) {
      //分类：分类ID=选中的ID
      setDataListByFilter(
        dataList.filter((item) => item.categoryId === filterKey)
      );
    } else if (tabKey === 2 && filterKey !== 0) {
      //时期：时期ID列表包括选中的时期ID即可
      setDataListByFilter(
        dataList.filter((item) => item.eraIdList.includes(filterKey))
      );
    } else {
      //推荐(filterKey===0)
      setDataListByFilter(dataList);
    }
  }, [dataListByFilter]);
  return (
    <View className="exhibitionList">
      <AtList className="listView">
        {dataListByFilter &&
          dataListByFilter.map(data => (
            <View
              className="detail_info"
              onClick={() => {
                    // Taro.setStorageSync("exhibitionId",data.id);
                    // Taro.setStorageSync("dataList",dataList);
                    Taro.navigateTo({
                      url: "/pages/exhibitionDetail/index?exhibitionId=" + data.id,
                    });
                  }}
            >
              <View className="image_container">
                <Image
                  style={{ width: '100%', height: '100%' }}
                  className="exhibition_image"
                  mode="scaleToFill"
                  src={data.exhibitionImage}
                />
              </View>
              <View className="bottom_content">
                <View className="content_header">
                  <View className="info_title">{data.exhibitionName}</View>
                  <View className="info_address">{data.exhibitionAddress}</View>
                  <View className="info_note">{data.exhibitionNote}</View>
                  <View className="info_distance">{`${data.exhibitionStartTime} - ${data.exhibitionFinishTime}`}</View>
                </View>
              </View>
            </View>
          ))}
      </AtList>
    </View>
  );
};
