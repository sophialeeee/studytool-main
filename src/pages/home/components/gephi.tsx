import React from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import dataTool from '../../../lib/dataTool'
import echarts from 'echarts/lib/echarts';
import { connect } from 'dva';
import 'echarts/lib/chart/graph';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend';
import { history } from 'umi';

class Gephi extends React.Component<any,any> {

//   onNodeClick = (data) => {
//       if (data.dataType === 'node'){
//           this.props.updateCourseName(data.data.id)
//       }
//   };

handleDomainClick = (data) => {
    if (data.dataType === 'node'){
        let currentDomainName = data.data.name;
        //@ts-ignore
        this.props.dispatch({
            type: 'globalData/updateCurrentDomainName',
            payload: {
              currentDomainName,
            }
          });
          history.push('/learning');
    }
  };
  render() {
    
    //@ts-ignore
    const { gephi,subjectName } = this.props;
    // 绑定点击事件
    const onEvents = {
        'click': this.handleDomainClick.bind(this)
    };
    let data = gephi;
    if(data === '') return null;
    let graph = dataTool.gexf.parse(data);
    let categories = [];
    let communityCount = 0;

    graph.nodes.forEach(function (node: { attributes: { modularity_class: number; }; itemStyle: null; value: any; symbolSize: number; category: any; label: { normal: { show: boolean; }; }; }) {
      communityCount = Math.max(communityCount, node.attributes.modularity_class);
      if(subjectName!=='计算机科学'){
        //@ts-ignore
        node.y = -node.y;
      }
      node.itemStyle = null;
     
      // node.symbolSize = 1;
      node.value = node.symbolSize;
      node.category = node.attributes.modularity_class;
     
      // Use random x, y
      // console.log(node);
      // node.x = node.x * 2;
      // node.y = node.y * 2;
      // node.x = node.y = null;
      // node.draggable = true;
      node.label = {
        normal: {
        
          show: node.symbolSize > 0,
          textStyle:{
              fontSize: 18
          }
        }
      };
      node.symbolSize = node.symbolSize / 3 + 12;
    });
    let communitySize: number[] = [];
    for (var i = 0; i <= communityCount; i++) {
      categories[i] = {name: '社团' + (i+1),symbol:'roundRect',symbolSize:'300'};
      communitySize[i] = 0;
    }
    graph.nodes.forEach(function (node: { symbolSize: any; attributes: { modularity_class: any; }; name: any; }) {
      let size = node.symbolSize;
      let community = node.attributes.modularity_class;
      for (let i = 0; i <= communityCount; i++) {
        if (community === i) {
          if (size > communitySize[i]) {
            categories[i] = {name: node.name,symbol:'roundRect',symbolSize:'300'};

          }
        }
      }
    });
    let option = {
      title: {
        text: subjectName,
        top: '90%',
        left: 'right'
      },
      tooltip: {},
      legend: {
        // selectedMode: 'single',
        top:'top',
        data: categories.map(function (a) {
          return a.name;
          
        }),
        textStyle: {
          fontSize: 24
        }
      },
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series : [
        {
          name: 'Les Miserables',
          type: 'graph',
          layout: 'none',
          data: graph.nodes,
          links: graph.links,
          // left: 20,
          top:'15%',
          // height: '100%',
          itemStyle : 'roundRect',
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [0.5, 7],
          categories: categories,
          focusNodeAdjacency: true,
          roam: true,
          label: {
            normal: {
              position: 'right'
            }
          },
          // force: {
          //   repulsion: 200
          // },
          lineStyle: {
            normal: {
              curveness: 0.25,
              color: 'source',
              width: 3
            }
          }
        }
      ]
    };

    return (
      <ReactEchartsCore  echarts={echarts} option={option}  onEvents={onEvents} style={{ height: '800px', width: '900px', margin: 'auto' }}/>
    );
  }

  componentDidMount() {

  }
}

function mapStateToProps(state: any) {
    const { subjects, currentSubjectName,graph,domains } = state.home;
    return {
      subjects,
      currentSubjectName,
      graph,
    }
  }
  
export default connect(mapStateToProps)(Gephi);


