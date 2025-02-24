import {View} from "@tarojs/components";
import {AtTabs, AtTabsPane} from "taro-ui";
import {useEffect, useState} from "react";
import ExhibitionList from "../ExhibitionList";
import "./index.scss";

/**
 * 根据传递过来的tabKey进行数据过滤
 */
export default ({ dataList, tabKey }) => {
  const exhibitionEra = [
    { title: "新民主主义革命时期" },
    { title: "社会主义革命和建设时期" },
    { title: "改革开放和社会主义现代化建设时期" },
    { title: "中国特色社会主义新时代" },
    { title: "其他" },
  ];
  type tabTitle = {
    title: string;
  };
  const exhibitionCategory = [
    { title: "革命博物馆" },
    { title: "纪念馆" },
    { title: "烈士陵园" },
    { title: "旧址" },
  ];
  const [tabList, setTabList] = useState<tabTitle[]>([]);
  useEffect(() => {
    //参数含义：二级tab行名称
    if (tabKey === 1) {
      setTabList(exhibitionCategory);
    } else if (tabKey === 2) {
      setTabList(exhibitionEra);
    } else {
      setTabList([]);
    }
  }, [tabList]);

  const [current, setCurrent] = useState(0);

  const handleClick = (value) => {
    setCurrent(value);
  };
  return (
    <View className="exhibitionListByCategory">
      {tabList.length === 0 ? (
        <ExhibitionList dataList={dataList} tabKey={tabKey} filterKey={0} />
      ) : (
        <AtTabs
          current={current}
          scroll
          tabList={tabList}
          onClick={handleClick.bind(this)}
        >
          {tabList &&
            tabList.map((tabName, index) => (
              <AtTabsPane current={current} index={index}>
                <View style="background-color: #f3f3f3;text-align: inherit;">
                  <ExhibitionList
                    dataList={dataList}
                    tabKey={tabKey}
                    filterKey={index + 1}
                  />
                </View>
              </AtTabsPane>
            ))}
        </AtTabs>
      )}
    </View>
  );
};
