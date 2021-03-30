import React from 'react';
import { connect } from 'dva';
import { history } from 'umi';
import classnames from 'classnames';
import { select } from 'd3';
import TopicsTree from '@/pages/learning/components/topicsTree';
import Forest from '@/pages/learning/components/forest';
import * as styles from './index.css';
import { CloseOutlined } from '@ant-design/icons';
import { Select, Radio } from 'antd';
import Leaf from '@/pages/learning/components/leaf/leaf';

const { Option } = Select;

class Learning extends React.Component<any, any> {
	
	constructor(props) {
	   super(props);
	   this.state = { 
		  onstate: false,
		  display: 'none',
		  showMain:  'block',
		  showMenu:  'none',
		  showFunc1: 'none',
		  showFunc2: 'none',
		  showFunc3: 'none',
		  showFunc4: 'none',
		  showReasons1:'none',
		  showReasons2:'none',
			showResult:'none',
			hideResult:'block',
		  showMore:'none',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'none',
			showContent4:'none',
	   }
	   this.handleButtonone = this.handleButtonone.bind(this);
	   this.handleButtontwo = this.handleButtontwo.bind(this);
	   this.handleButtonthree = this.handleButtonthree.bind(this);
	   this.handleButtonfour = this.handleButtonfour.bind(this);	   
		 this.handleBacktoMain = this.handleBacktoMain.bind(this);
	}
	
  state = {
    showDetail: false,
    showOnlyPath: true,
  };

  handleClickTopicsTree = (currentTopicId: string) => {
    if (document.getElementById(currentTopicId) !== null) {
      select(document.getElementById(currentTopicId)).dispatch('click');
    }
  };

  handleClickTopic = (currentTopicName: string) => {
    this.props.dispatch({
      type: 'globalData/updateCurrentTopicName',
      payload: {
        currentTopicName,
      },
    });
  };

  handleClickFacet = (facetId: number) => {
    this.props.dispatch({
      type: 'globalData/getFacetNamesByFacetId',
      payload: {
        facetId,
      },
    });
    this.setState({ showDetail: true });
  };

  handleChangeLearningMethod = (learningMethod: string) => {
    this.props.dispatch({
      type: 'learning/updateLearningMethod',
      payload: {
        learningMethod,
      }
    });
    if (learningMethod === 'global') {
      this.props.dispatch({
        type: 'learning/updateLearningPath',
        payload: {
          learningPath: [],
        }
      });
		}
  };

  handleClickLearningTopic = (topicId: number) => {
    this.props.dispatch({
      type: 'learning/getPath',
      payload: {
        topicId
      }
    });
  };


  handlebutton = () => {
			this.setState(prevState => ({
        onstate: !prevState.onstate,
				display: prevState.onstate ? 'none': 'block',
				// display:'none',
				showMain:'none',
		    showMenu:'block',
		    showFunc1:'block',
		    showFunc2:'none',
		    showFunc3:'none',
		    showFunc4:'none',
		    showReasons1:'none',
		    showReasons2:'none',
		    showResult:'none',
		    showContent1:'none',
		    showContent2:'none',
		    showContent3:'none',
		    showContent4:'none',
		    showMore:'none',
          }));
  };
  
  handleButtonone = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'block',
		  showFunc1:'block',
		  showFunc2:'none',
		  showFunc3:'none',
		  showFunc4:'none',
		  showReasons1:'none',
		  showReasons2:'none',
		  showResult:'none',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'none',
		  showContent4:'none',
			showMore:'none',
	  });
  };
  
  handleButtontwo = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'block',
		  showFunc1:'none',
		  showFunc2:'block',
		  showFunc3:'none',
		  showFunc4:'none',
		  showReasons1:'none',
		  showReasons2:'none',
		  showResult:'none',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'none',
		  showContent4:'none',
			showMore:'none',
			hideResult:'block',
	  });
  };
  
  handleButtonthree = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'block',
		  showFunc1:'none',
		  showFunc2:'none',
		  showFunc3:'block',
		  showFunc4:'none',
		  showReasons1:'none',
		  showReasons2:'none',
		  showResult:'none',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'none',
		  showContent4:'none',
			showMore:'none',
	  });
  };

  handleButtonfour = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'none',
		  showFunc1:'none',
		  showFunc2:'none',
		  showFunc3:'none',
		  showFunc4:'block',
		  showReasons1:'none',
		  showReasons2:'none',
		  showResult:'none',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'none',
		  showContent4:'none',
			showMore:'block',
	  });
  };  
  
  handleBacktoMain = () => {
	  this.setState({
		  showMain:'block',
		  showMenu:'none',
		  showFunc1:'none',
		  showFunc2:'none',
		  showFunc3:'none',
		  showFunc4:'none',
		  showReasons1:'none',
		  showReasons2:'none',
			showResult:'none',
			hideResult:'block',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'none',
		  showContent4:'none',
			showMore:'none',
 	  });
  };
  
  handleBacktoFunc1 = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'block',
		  showFunc1:'block',
		  showFunc2:'none',
		  showFunc3:'none',
		  showFunc4:'none',
		  showReasons1:'none',
		  showReasons2:'none',
		  showResult:'none',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'none',
		  showContent4:'none',
		  showMore:'none',
 	  });
  };
  
  handleBacktoFunc2 = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'block',
		  showFunc1:'none',
		  showFunc2:'block',
		  showFunc3:'none',
		  showFunc4:'none',
		  showReasons1:'none',
		  showReasons2:'none',
			showResult:'none',
			hideResult:'block',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'none',
		  showContent4:'none',
		  showMore:'none',
 	  });
  };
  
  handleBacktoFunc3 = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'block',
		  showFunc1:'none',
		  showFunc2:'none',
		  showFunc3:'block',
		  showFunc4:'none',
		  showReasons1:'none',
		  showReasons2:'none',
		  showResult:'none',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'none',
		  showContent4:'none',
		  showMore:'none',
 	  });
  };
  
  handleBacktoFunc4 = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'none',
		  showFunc1:'none',
		  showFunc2:'none',
		  showFunc3:'none',
		  showFunc4:'block',
		  showReasons1:'none',
		  showReasons2:'none',
		  showResult:'none',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'none',
		  showContent4:'none',
		  showMore:'block',
 	  });
  };
  
  handleToReansons1 = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'none',
		  showFunc1:'none',
		  showFunc2:'none',
		  showFunc3:'none',
		  showFunc4:'none',
		  showReasons1:'block',
		  showReasons2:'none',
		  showResult:'none',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'none',
		  showContent4:'none',
		  showMore:'block',
 	  });
  };

  handleToReansons2 = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'none',
		  showFunc1:'none',
		  showFunc2:'none',
		  showFunc3:'none',
		  showFunc4:'none',
		  showReasons1:'none',
		  showReasons2:'block',
			showResult:'block',
			hideResult:'none',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'none',
		  showContent4:'none',
		  showMore:'block',
 	  });
  };
  
  handleToResult = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'block',
		  showFunc1:'none',
		  showFunc2:'block',
		  showFunc3:'none',
		  showFunc4:'none',
		  showReasons1:'none',
		  showReasons2:'none',
			showResult:'block',
			hideResult:'none',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'none',
		  showContent4:'none',
		  showMore:'none',
 	  });
  };
  
  handleContent1 = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'none',
		  showFunc1:'none',
		  showFunc2:'none',
		  showFunc3:'none',
		  showFunc4:'none',
		  showReasons1:'none',
		  showReasons2:'none',
			showResult:'none',
			showContent1:'block',
		  showContent2:'none',
		  showContent3:'none',
		  showContent4:'none',
		  showMore:'block',
 	  });
  };

  handleContent2 = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'none',
		  showFunc1:'none',
		  showFunc2:'none',
		  showFunc3:'none',
		  showFunc4:'none',
		  showReasons1:'none',
		  showReasons2:'none',
		  showResult:'none',
		  showContent1:'none',
		  showContent2:'block',
		  showContent3:'none',
		  showContent4:'none',
		  showMore:'block',
 	  });
  };
  
  handleContent3 = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'none',
		  showFunc1:'none',
		  showFunc2:'none',
		  showFunc3:'none',
		  showFunc4:'none',
		  showReasons1:'none',
		  showReasons2:'none',
		  showResult:'none',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'block',
		  showContent4:'none',
		  showMore:'block',
 	  });
  };
  
  handleContent4 = () => {
	  this.setState({
		  showMain:'none',
		  showMenu:'none',
		  showFunc1:'none',
		  showFunc2:'none',
		  showFunc3:'none',
		  showFunc4:'none',
		  showReasons1:'none',
		  showReasons2:'none',
		  showResult:'none',
		  showContent1:'none',
		  showContent2:'none',
		  showContent3:'none',
		  showContent4:'block',
		  showMore:'block',
 	  });
  };
  // test = () => {
	// 	console.log(this.refs.condition.props.value)
	// 	this.refs.condition.props.defaultValue = "special"
	// 	console.log(this.refs.condition.props.value)
  // };


  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const {
      topicsTree,
      currentDomainName,
      assembles,
      learningMethod,
      topics,
      learningPath,
      learningTopicsTree,
      currentTopicName,
      currentFirstFacetName,
      currentSecondFacetName
    } = this.props;
    const { showDetail, showOnlyPath } = this.state;
    return (
	<div>
		<div>
			<button className={styles['menu-button']} onClick={this.handlebutton}>  
			{/* handlebutton */}
				<div className={styles['menu-pic']}></div>
				<div className={styles['menu-text']}>学习小助手</div>
			</button>
			{/* <button className={styles['menu-button-pic']} onClick={this.handlebutton}></button> */}
		</div>
		<div >
			<div className={styles['side-bar']}>
				<div className={styles['learning-method']}>
					<div style={{ marginBottom: 4}}>
						学习方式：
					<Select defaultValue="global" ref="condition" style={{ width: 160 }} onChange={this.handleChangeLearningMethod}>
						<Option value="global">零基础</Option>
						<Option value="special">场景驱动</Option>
					</Select>
					</div>
					{
					    learningMethod === 'special' &&
					    <Select
						showSearch
						style={{ width: 200 }}
						placeholder="选择知识点"
						optionFilterProp="children"
						onChange={(value: string) => this.handleClickLearningTopic(parseInt(value))}
						filterOption={(input, option) =>
						  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}
						>
						{
						  Object.keys(topics).filter(x => x !== '-1').map(x => <Option value={x}>{topics[x]}</Option>)
						}
						</Select>
					}
				</div>
				
				<div>
					<div className={classnames(styles['topics-header'], { [styles['topics-header-special']]: learningMethod === 'special' })}>
						<span style={{ padding: '0 8px', fontWeight: 600, fontSize: 16 }}>知识点列表</span>
						{
						  learningPath.length !== 0
						  &&
						  <Radio.Button checked={showOnlyPath} onClick={() => this.setState({ showOnlyPath: !showOnlyPath })}>仅显示推荐路径</Radio.Button>
						}
					</div>
				</div>
				
				<div style={{ height:5 }}>
					<div className={classnames(styles['topics-tree'], { [styles['learning-special']]: learningMethod === 'special' })}>
						<TopicsTree
						  topicsTree={learningPath.length !== 0 ? learningTopicsTree : topicsTree}
						  clickTopic={this.handleClickTopicsTree}
						  learningPath={learningPath}
						  showOnlyPath={showOnlyPath}
						/>
					</div>
				</div>
			</div>
			
			<div style={{ marginLeft: 240, overflow: 'hidden', maxHeight: 'calc(100vh - 60px)' }}>
			  {
				currentDomainName &&
				<Forest currentDomainName={currentDomainName} learningPath={learningPath} clickTopic={this.handleClickTopic} clickFacet={this.handleClickFacet} />
			  }
			</div>
			<div className={classnames(styles.detail, { [styles.hidden]: !showDetail, [styles.shown]: showDetail })}>
				<div style={{ position: 'absolute', top: 0, padding: 4, width: '100%', backgroundColor: '#fafafa', borderBottom: '1px solid #d9d9d9' }}>
					<span style={{fontSize: 16, fontWeight: 600}}>
					  {currentTopicName}-{currentFirstFacetName}{
						currentSecondFacetName && '-' + currentSecondFacetName
					  }
					</span>
					<CloseOutlined
					  style={{ position: 'absolute', right: 10, top: 10}}
					  onClick={
						() => {
						  this.setState({ showDetail: false });
						}
					  } />
				</div>
				<div style={{marginTop: 32, padding: 16}}>
				{
				  assembles.map((assemble: { assembleId: number; assembleContent: string; assembleScratchTime: string; facetId: number; sourceId: number; domainId: number; type: string; }) => (
					<Leaf assemble={assemble} key={assemble.assembleId} />
				  ))
				}
				</div>
			</div>
		</div>
		
		
		{/* <div>
			<div className={styles['learning-tool']} style={{display:this.state.display, borderWidth: '2px'}}>
				<button className={styles['button1']} onClick={this.handleButtonone}>问题解答</button>      
				<button className={styles['button2']} onClick={this.handleButtontwo}>知识自测</button>
				<button className={styles['button3']} onClick={this.handleButtonthree}>学习路径</button>
				<button className={styles['button4']} onClick={this.handleButtonfour}>对比学习</button>
			</div>
		</div> */}
			


		<div style={{display:this.state.showFunc1}}>
			<div className={styles['bgcolor1']} style={{display:this.state.display}}>
				<div style={{display:this.state.showMenu}}>
					<button className={styles['button-func1']} onClick={this.handleButtonone}>问题解答</button>      
					<button className={styles['button-func2']} onClick={this.handleButtontwo}>知识自测</button>
					<button className={styles['button-func3']} onClick={this.handleButtonthree}>学习路径</button>
					<button className={styles['button-func4']} onClick={this.handleButtonfour}>对比学习</button>
				</div>
				<div className={styles['index-size']}>▶ 当前主题：椭圆</div>
				<div className={styles['index-size1']}>请输入问题：</div>
				<div className={styles['func1-inputbox']} contenteditable="true"></div>
				{/* <div className={styles['index-size2']}>点击上传截图</div> */}
				<button className={styles['button-func1-backtomain']} onClick={this.handlebutton}>关 闭</button>
				<button className={styles['button-func1-toreasons']} onClick={this.handleToReansons1}>答案解析</button>
			</div>
		</div>
		

		<div style={{display:this.state.showMore}}>
			<div style={{display:this.state.display}}>
				<div style={{display:this.state.showReasons1}} className={styles['detail-page1']}> 
					<div className={styles['func1-result']} style={{paddingTop: '10px', fontSize: '20px'}}>
						<span><b>正确答案</b></span><br/>
						<span className={styles['result-size']}>B</span>
					</div>		
					<div className={styles['func1-reasons']}>
						<div>
							<p style={{fontSize: '18px', marginTop: '10px'}}><b>答案解析</b></p>
							<div style={{marginTop: '10px', marginBottom: '5px'}}><span style={{fontSize: '16px', marginTop: '10px', marginBottom: '5px', backgroundColor:'#FED658', borderRadius:'5px', padding:'5px'}}><b>✔ 文本解析：</b></span></div>
							<div className={styles['tab']} style={{fontWeight: 'normal'}}>平面内与两定点F1、F2的距离的和等于常数2a（2a﹥∣F1F2∣）的动点P的轨迹叫椭圆。</div>
							<div className={styles['tab']} style={{fontWeight: 'bold', color: 'red'}}>其中两定点F1、F2叫做椭圆的焦点。椭圆截与两焦点连线重合的直线所得的弦为长轴，长为2a。椭圆截垂直平分两焦点连线的直线所得弦为短轴，长为2b。</div>
							{/* <div className={styles['tab']} style={{fontWeight: 'normal'}}>其中两定点</div> */}
							<div style={{marginTop: '10px', marginBottom: '5px'}}><span style={{fontSize: '16px', marginTop: '10px', marginBottom: '5px', backgroundColor:'#FED658', borderRadius:'5px', padding:'5px'}}><b>✔ 指导图解析：</b></span></div>
							<div className={styles['img_func1_reason']}></div>
						</div>
					</div>
					<div className={styles['func1-question']}>
						<div style={{marginBottom: '5px'}}>
								<div style={{fontSize: '18px', marginTop: '8px', marginBottom: '5px'}}><b>问 题</b></div>
								<div style={{marginBottom: '5px'}}><b>关于示意图中的椭圆，下列说法正确的是？</b></div>
								<div className={styles['tab']}>A.该椭圆的短轴长为10</div>
								<div className={styles['tab']}>B.该椭圆的长轴长为8</div>
								<div className={styles['tab']}>C.该椭圆的长轴长为10</div>
								<div className={styles['tab']}>D.以上说法都不正确</div>
								<div style={{fontSize: '16px', marginTop: '5px', marginBottom: '5px'}}><b>指导图：</b></div>
								<div className={styles['img_func1_question']}></div>
						</div>
					</div>
					<button className={styles['button-func1-backtomenu']} onClick={this.handleBacktoFunc1}>返 回</button>
				</div>
			</div>
		</div>


		<div style={{display:this.state.showFunc2}}>
			<div className={styles['bgcolor2']} style={{display:this.state.display}}>	
				<div style={{display:this.state.showMenu}}>
					<button className={styles['button-func1']} onClick={this.handleButtonone}>问题解答</button>      
					<button className={styles['button-func2']} onClick={this.handleButtontwo}>知识自测</button>
					<button className={styles['button-func3']} onClick={this.handleButtonthree}>学习路径</button>
					<button className={styles['button-func4']} onClick={this.handleButtonfour}>对比学习</button>
				</div>			
				<div className={styles['func2-result1']} style={{display:this.state.showResult}}>
					<p>正确答案:C</p>
					{/* <div style={{display:this.state.showResult}}><p className={styles['result-size']}>B</p></div> */}
				</div>		
				<div className={styles['func2-result1']} style={{display: this.state.hideResult}} onClick={this.handleToResult}>点击显示正确答案
				</div>
				<div className={styles['index-size']}>▶ 当前主题：有向图</div>		
				<div className={styles['func2-questionbox']}>
					<div>
						<div style={{marginTop: '10px', marginBottom: '10px'}}><b>问题 1</b></div>
						<div style={{marginBottom: '10px'}}><b>根据图示，关于有向图中结点B的正确说法是？</b></div>
						<div>A. 出度为2</div>
						<div>B. 入度为3</div>
						<div>C. 出度为1</div>
						<div>D. 入度为2</div>
						<div className={styles['img_func2_question']}></div>
					</div>
				</div>
				<button className={styles['button-func2-backtomain']} onClick={this.handlebutton}>关 闭</button>
				
				<button className={styles['button-func2-toreasons']} onClick={this.handleToReansons2}>答案解析</button>
			</div>
		</div>
			
			
		<div style={{display:this.state.showMore}}>
			<div style={{display:this.state.display}}>
				<div style={{display:this.state.showReasons2}} className={styles['detail-page2']}> 
					<div className={styles['func2-result2']}>
						<p>正确答案</p>
						<p className={styles['result-size']}>C</p>
					</div>		
					<div className={styles['func2-reasons']}>
						{/* <div className={styles['func2-reasons-text']}> */}
						<div>
							<div style={{fontSize: '18px', marginTop: '10px', marginBottom: '10px'}}><b>答案解析</b></div>
							<div style={{marginTop: '10px', marginBottom: '5px'}}><span style={{fontSize: '16px', marginTop: '10px', marginBottom: '5px', backgroundColor:'#9AE6F0', borderRadius:'5px', padding:'5px'}}><b>✔ 文本解析：</b></span></div>
							<div className={styles['tab']}>度是针对结点来说的， 又分为出度和入度，看到“出度入度”，我们不难想到这是与边和边的方向有关的。
							对于有向图来说，<span style={{color:'red'}}><b>出度就是指以这个结点为起始的边的条数（箭头向外），入度则是以这个点为终点的边的条数（箭头向内）。</b></span></div>
							<div style={{marginTop: '10px', marginBottom: '5px'}}><span style={{fontSize: '16px', marginTop: '10px', marginBottom: '5px', backgroundColor:'#9AE6F0', borderRadius:'5px', padding:'5px'}}><b>✔ 指导图解析：</b></span></div>
							<div className={styles['img_func2_reason']}></div>
						</div>
					</div>
					<div className={styles['func2-question']}>
						<div style={{fontSize: '18px', marginTop: '8px', marginBottom: '5px'}}><b>问 题</b></div>
							<div style={{marginBottom: '5px'}}><b>根据图示，关于有向图中结点B的正确说法是？</b></div>
							<div className={styles['tab']}>A. 出度为2</div>
							<div className={styles['tab']}>B. 入度为3</div>
							<div className={styles['tab']}>C. 出度为1</div>
							<div className={styles['tab']}>D. 入度为2</div>
							<div className={styles['img_func2_question']}></div>
						</div>
						<button className={styles['button-func2-backtomenu']} onClick={this.handleBacktoFunc2}>返 回</button>
					</div>
					
					{/* <div className={styles['func2-reasons-pic']}></div> */}

			</div>
		</div>
			

		<div style={{display:this.state.showFunc3}}>
			<div className={styles['bgcolor3']} style={{display:this.state.display}}>	
				<div style={{display:this.state.showMenu}}>
					<button className={styles['button-func1']} onClick={this.handleButtonone}>问题解答</button>      
					<button className={styles['button-func2']} onClick={this.handleButtontwo}>知识自测</button>
					<button className={styles['button-func3']} onClick={this.handleButtonthree}>学习路径</button>
					<button className={styles['button-func4']} onClick={this.handleButtonfour}>对比学习</button>
				</div>
				<div className={styles['index-size']}>▶ 当前主题：有向图</div>			
				<div className={styles['func3-routebox']}>
					<div style={{marginTop: '15px', marginBottom: '40px'}}>根据当前所学知识点，系统推荐如下学习路径：</div>
					<div style={{marginTop: '20px', marginBottom: '40px'}}>
						<span style={{fontSize:'22px'}}> 邻接表 </span>
						<span style={{fontSize:'22px'}}> --- </span>
						<span style={{fontSize:'22px'}}> 无向图 </span>
						<span style={{fontSize:'22px'}}> --- </span>
						<span style={{fontSize:'22px', backgroundColor:'#FFBA8F', borderRadius:'10px',padding:'5px'}}> 有向图</span>
						<span style={{fontSize:'22px'}}> --- </span>
						<span style={{fontSize:'22px'}}> 完全图</span>
						<span style={{fontSize:'22px'}}> --- </span>
						<span style={{fontSize:'22px'}}> 连通图 </span>
					</div>
				</div>
				{/* <button className={styles['button-func3-backtomain']} onClick={this.handlebutton}>关 闭</button> */}
				<button className={styles['button-func3-backtomain']} onClick={this.handlebutton}>关 闭</button>
			</div>
		</div>
			
		<div style={{display:this.state.showMore}}>
			<div style={{display:this.state.display}}>
				<div style={{display:this.state.showFunc4}} className={styles['detail-page4']}>
				<div className={styles['index-size-4']}>▶ 当前主题：有向图</div>
					<div className={styles['func4-contentbox']}>
						<div style={{paddingLeft:'0px', paddingTop:'0px'}}>
						<table border="3">
							<tr height="60">
								<td className={styles['line']}></td>
									<div className={styles['tableheadtext1']}><b>属性</b></div>
									<div className={styles['tableheadtext2']}><b>主题</b></div>
								<td width="270"><span style={{backgroundColor:'#C7F39F', borderRadius:'15px',paddingLeft:'10px', paddingRight:'10px', paddingBottom:'6px', paddingTop:'6px'}}><b>有向图</b></span></td><td width="270"><b>无向图</b></td>
							</tr>
							<tr height="60"><td width="150"><b>定义</b></td><td width="270">所有边都是有向的图</td><td width="270">所有边都是无向的图</td></tr>
							<tr height="60"><td width="150"><b>边的表示</b></td><td width="270">箭头符号</td><td width="270">线段符号</td></tr>
							<tr height="60"><td width="150"><b>性质</b></td><td width="270">有向图的边具有方向性</td><td width="270">无向图的边都是双向的</td></tr>
							<tr height="60"><td width="150"><b>出度</b></td><td width="270"><div style={{overflow: 'auto', height: '60px'}}>顶点的出边条数称为该顶点的出度</div></td>
								<td width="270">无向图没有出度的概念</td>
							</tr>
						</table>
						</div>
					</div>
					<button className={styles['button-func4-tocontent1']} onClick={this.handleContent1}>连通图</button>
					<button className={styles['button-func4-tocontent2']} onClick={this.handleContent2}>强连通图</button>
					<button className={styles['button-func4-tocontent3']} onClick={this.handleContent3}>完全图</button>
					<button className={styles['button-func4-tocontent4']} onClick={this.handleContent4}>平面图</button>
					<button className={styles['button-func4-backtomenu']} onClick={this.handlebutton}>关 闭</button>
					<button className={styles['button-func4-backtomain']} onClick={this.handleButtonone}>返 回</button>
				</div>
			</div>
		</div>
			

		<div style={{display:this.state.showMore}}>
			<div style={{display:this.state.display}}>
				<div style={{display:this.state.showContent1}} className={styles['detail-page4']}>
				<div className={styles['index-size-4']}>▶ 当前主题：有向图</div>
					<div className={styles['func4-contentbox']}>
						<div>
						<table border="3">
							<tr height="60">
								<td className={styles['line']}></td>
									<div className={styles['tableheadtext1']}><b>属性</b></div>
									<div className={styles['tableheadtext2']}><b>主题</b></div>
								<td width="270"><span style={{backgroundColor:'#C7F39F', borderRadius:'15px',paddingLeft:'10px', paddingRight:'10px', paddingBottom:'6px', paddingTop:'6px'}}><b>有向图</b></span></td><td width="270"><b>连通图</b></td>
							</tr>
							{/* <tr height="60"><td width="150"></td><td width="250"><b>有向图</b></td><td width="270"><b>连通图</b></td></tr> */}
							<tr height="60"><td width="150"><b>定义</b></td><td width="270">所有边都是有向的图</td><td width="270"><div style={{overflow: 'auto', height: '60px'}}>无向图中若从顶点i到顶点j有路径相连，有向图中连接i和j的路径中所有的边都同向，则称i和j是连通的。如果图中每两点都是连通的，则称为连通图。</div></td></tr>
							<tr height="60"><td width="150"><b>边的表示</b></td><td width="270">箭头符号</td><td width="270">箭头符号或线段符号</td></tr>
							<tr height="60"><td width="150"><b>性质</b></td><td width="270">有向图的边具有方向性</td><td width="270">连通图中每两点均是连通的</td></tr>
							<tr height="60"><td width="150"><b>关联性</b></td><td width="270"><div style={{overflow: 'auto'}}>有向图可以是连通图</div></td><td width="270">连通图可以是有向图</td>
							</tr>
						</table>
						</div>
					</div>
					<button className={styles['button-func4-tocontent1']} onClick={this.handleButtonfour}>无向图</button>
					<button className={styles['button-func4-tocontent2']} onClick={this.handleContent2}>强连通图</button>
					<button className={styles['button-func4-tocontent3']} onClick={this.handleContent3}>完全图</button>
					<button className={styles['button-func4-tocontent4']} onClick={this.handleContent4}>平面图</button>
					<button className={styles['button-func4-backtomenu']} onClick={this.handlebutton}>关 闭</button>
					<button className={styles['button-func4-backtomain']} onClick={this.handleButtonone}>返 回</button>
				</div>
			</div>
		</div>
			
		<div style={{display:this.state.showMore}}>
			<div style={{display:this.state.display}}>
				<div style={{display:this.state.showContent2}} className={styles['detail-page4']}>                
					<div className={styles['func4-detail2']}>
						<div className={styles['title-size']}>强连通图</div>
					</div>
					<p><button className={styles['button-func4-backtomenu']} onClick={this.handleBacktoFunc4}>返 回</button></p>
				</div>
			</div>
		</div>

		<div style={{display:this.state.showMore}}>
			<div style={{display:this.state.display}}>
				<div style={{display:this.state.showContent3}} className={styles['detail-page4']}>                
					<div className={styles['func4-detail3']}>
						<div className={styles['title-size']}>完全图</div>
					</div>
					<p><button className={styles['button-func4-backtomenu']} onClick={this.handleBacktoFunc4}>返 回</button></p>
				</div>
			</div>
		</div>

		<div style={{display:this.state.showMore}}>
			<div style={{display:this.state.display}}>
				<div style={{display:this.state.showContent4}} className={styles['detail-page4']}>                
					<div className={styles['func4-detail4']}>
						<div className={styles['title-size']}>平面图</div>
					</div>
					<p><button className={styles['button-func4-backtomenu']} onClick={this.handleBacktoFunc4}>返 回</button></p>
				</div>
			</div>
		</div>		
	</div>
    );
  }

  componentDidMount(): void {
    if (this.props.authToken === '') {
      history.push('/login');
    } else {
      const { currentDomainName } = this.props;
      this.props.dispatch({
        type: 'learning/getDependence',
        payload: {
          domainName: currentDomainName,
        }
      });
    }
  }
}

function mapPropsToState(state: any) {
  const { authToken } = state.userData;
  const {
    currentDomainName,
    assembles,
    currentTopicName,
    currentFirstFacetName,
    currentSecondFacetName
  } = state.globalData;
  const { topicsTree, learningMethod, topics, learningPath, learningTopicsTree } = state.learning;
  return {
    topics,
    authToken,
    currentDomainName,
    topicsTree,
    assembles,
    learningMethod,
    learningPath,
    learningTopicsTree,
    currentTopicName,
    currentFirstFacetName,
    currentSecondFacetName
  };
}

export default connect(mapPropsToState)(Learning);
