import {View} from "@tarojs/components";
import {AtList, AtListItem, AtTabs, AtTabsPane} from "taro-ui";
import {useState} from "react";
import learnData from "../../data/learn_data.json";
import GlobalFooter from "../../components/GlobalFooter";
import GlobalMenu from "../../components/GlobalMenu";
import "./index.scss";

/**
 * 红色研学
 */
export default () => {
  const redLearnData = learnData;
  console.log(redLearnData);

  // 状态：当前选中的标签
  const [current, setCurrent] = useState(0);

  // 标签页的选项
  const tabList = [{ title: '信息' }, { title: '专栏' }];


  //处理专栏内容
  const handleZhanLanClick =(id:number)=>{
    console.log(id);//todo 详细的markdown文档页
  }
  return (
    <View className="redLearnPage">
      {/* 顶部导航栏 */}
      <AtTabs
        current={current}
        tabList={tabList}
        onClick={(value) => setCurrent(value)} // 切换标签时更新状态
      >
        {/* 信息页面内容 */}
        <AtTabsPane current={current} index={0}>
          <View className="info-card">
            <AtList>
              <AtListItem
                title='共产党宣言'
                note='马克思和恩格斯为共产主义者同盟起草'
                thumb='path_to_image.jpg'
              />
              <AtListItem
                title='关于费尔巴哈的提纲'
                note='该文批判了费尔巴哈旧唯物主义观点'
                thumb='path_to_image.jpg'
              />
              <AtListItem
                title='社会主义从空想到科学的发展'
                note='恩格斯的一部科学社会主义著作'
                thumb='path_to_image.jpg'
              />
              <AtListItem
                title='反杜林论'
                note='恩格斯批判欧根·杜林在哲学、经济学上的理论'
                thumb='path_to_image.jpg'
              />
              <AtListItem
                title='哥达纲领批判'
                note='马克思批判性的社会政治文章'
                thumb='path_to_image.jpg'
              />
              <AtListItem
                title='政治经济学批判'
                note='马克思的经济学理论著作'
                thumb='path_to_image.jpg'
              />
              <AtListItem
                title='资本论'
                note='马克思的经济学巨作'
                thumb='path_to_image.jpg'
              />
            </AtList>
          </View>
        </AtTabsPane>
        {/* 专栏页面内容 */}
        <AtTabsPane current={current} index={1}>
          {redLearnData.map(item => (
            <View
              key={item.id}
              className="zhuanlan-card"
              onClick={() => handleZhanLanClick(item.id)}
            >
              <View className="card-header">
                追寻革命圣地
                <View>感悟红色精神</View>
              </View>
              <View className="card-description">
                {item.learnTitle}
              </View>
            </View>
          ))}
        </AtTabsPane>
      </AtTabs>
      <GlobalFooter />
      <GlobalMenu />
    </View>

  )
}
