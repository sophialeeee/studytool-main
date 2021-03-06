import React from 'react';
import { connect } from 'dva';
import { history } from 'umi';
import classnames from 'classnames';
import { select } from 'd3';
import TopicsTree from '@/pages/learning/components/topicsTree';
import Forest from '@/pages/learning/components/forest';
import * as styles from './index.css';
import { CloseOutlined, HomeOutlined } from '@ant-design/icons';
import { Select, Radio, Breadcrumb } from 'antd';
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
	// localStorage.setItem('currentTopicName', currentTopicName);
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
    //   topicsTree,
    //   currentDomainName,
      assembles,
      learningMethod,
    //   topics,
    //   learningPath,
    //   learningTopicsTree,
      currentTopicName,
      currentFirstFacetName,
      currentSecondFacetName
    } = this.props;
	
	var {topicsTree, currentDomainName, topics, learningPath, learningTopicsTree} = this.props
	console.log('this.props:', this.props);
    const { showDetail, showOnlyPath } = this.state;
	// if (localStorage.getItem('topicsTree')) {
	// 	topicsTree = localStorage.getItem('topicsTree');
	//   };
	if (localStorage.getItem('currentDomainName')) {
		currentDomainName = localStorage.getItem('currentDomainName');
		if(currentDomainName === '????????????'){
			currentDomainName = '????????????(??????)';
			localStorage.setItem('currentDomainName', '????????????(??????)');
			// console.log('????????????????????????');
		  }
	};
	if (currentDomainName){
		console.log('hahahahahahahahei')
	}else{
		history.push('/home');
	};

	// if (localStorage.getItem('topics')) {
	// 	topics = localStorage.getItem('topics');
	// };
	// if (localStorage.getItem('learningPath')) {
	// 	learningPath = localStorage.getItem('learningPath');
	// };
	// if (localStorage.getItem('learningTopicsTree')) {
	// 	learningTopicsTree = localStorage.getItem('learningTopicsTree');
	// };
	// localStorage.setItem('topicsTree', topicsTree);
	localStorage.setItem('currentDomainName', currentDomainName);
	// localStorage.setItem('topics', topics);
	// localStorage.setItem('learningPath', learningPath);
	// localStorage.setItem('learningTopicsTree', learningTopicsTree);
	console.log('localStorageDomainName', localStorage.getItem('currentDomainName'));
    return (
	<div>
		<div>
			<button className={styles['menu-button']} onClick={this.handlebutton}>  
			{/* handlebutton */}
				<div className={styles['menu-pic']}></div>
				<div className={styles['menu-text']}>???????????????</div>
			</button>
			{/* <button className={styles['menu-button-pic']} onClick={this.handlebutton}></button> */}
		</div>
		<div >
			<div className={styles['side-bar']}>
				<div className={styles['learning-method']}>
					<div style={{marginBottom: 4, marginLeft: 10}}>
					<Breadcrumb.Item onClick={() => this.handleHomeButton('','')}>
						<HomeOutlined style={{cursor: 'pointer'}} />
					</Breadcrumb.Item>
					{
						currentDomainName !== '' &&
						<Breadcrumb.Item>
							{currentDomainName}
						</Breadcrumb.Item>
					}
					</div>
					<div style={{ marginBottom: 4}}>
						???????????????
					<Select defaultValue="global" ref="condition" style={{ width: 160 }} onChange={this.handleChangeLearningMethod}>
						<Option value="global">?????????</Option>
						{/* <Option value="special">????????????</Option> */}
					</Select>
					</div>
					{
					    learningMethod === 'special' &&
					    <Select
						showSearch
						style={{ width: 200 }}
						placeholder="???????????????"
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
						<span style={{ padding: '0 8px', fontWeight: 600, fontSize: 16}}>???????????????</span>
						{
						  learningPath.length !== 0
						  &&
						  <Radio.Button checked={showOnlyPath} onClick={() => this.setState({ showOnlyPath: !showOnlyPath })}>?????????????????????</Radio.Button>
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
			
			<div style={{ marginLeft: 450, overflow: 'hidden', maxHeight: 'calc(100vh - 60px)' }}>
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
				<button className={styles['button1']} onClick={this.handleButtonone}>????????????</button>      
				<button className={styles['button2']} onClick={this.handleButtontwo}>????????????</button>
				<button className={styles['button3']} onClick={this.handleButtonthree}>????????????</button>
				<button className={styles['button4']} onClick={this.handleButtonfour}>????????????</button>
			</div>
		</div> */}
			


		<div style={{display:this.state.showFunc1}}>
			<div className={styles['bgcolor1']} style={{display:this.state.display}}>
				<div style={{display:this.state.showMenu}}>
					<button className={styles['button-func1']} onClick={this.handleButtonone}>????????????</button>      
					<button className={styles['button-func2']} onClick={this.handleButtontwo}>????????????</button>
					<button className={styles['button-func3']} onClick={this.handleButtonthree}>????????????</button>
					<button className={styles['button-func4']} onClick={this.handleButtonfour}>????????????</button>
				</div>
				<div className={styles['index-size']}>??? ?????????????????????</div>
				<div className={styles['index-size1']}>??????????????????</div>
				<div className={styles['func1-inputbox']} contenteditable="true"></div>
				{/* <div className={styles['index-size2']}>??????????????????</div> */}
				<button className={styles['button-func1-backtomain']} onClick={this.handlebutton}>??? ???</button>
				<button className={styles['button-func1-toreasons']} onClick={this.handleToReansons1}>????????????</button>
			</div>
		</div>
		

		<div style={{display:this.state.showMore}}>
			<div style={{display:this.state.display}}>
				<div style={{display:this.state.showReasons1}} className={styles['detail-page1']}> 
					<div className={styles['func1-result']} style={{paddingTop: '10px', fontSize: '20px'}}>
						<span><b>????????????</b></span><br/>
						<span className={styles['result-size']}>C</span>
					</div>		
					<div className={styles['func1-reasons']}>
						<div>
							<p style={{fontSize: '18px', marginTop: '10px'}}><b>????????????</b></p>
							<div style={{marginTop: '10px', marginBottom: '5px'}}><span style={{fontSize: '16px', marginTop: '10px', marginBottom: '5px', backgroundColor:'#FED658', borderRadius:'5px', padding:'5px'}}><b>??? ???????????????</b></span></div>
							<div className={styles['tab']} style={{fontWeight: 'normal'}}>?????????????????????F1???F2???????????????????????????2a???2a??????F1F2???????????????P?????????????????????</div>
							<div className={styles['tab']} style={{fontWeight: 'bold', color: 'red'}}>???????????????F1???F2????????????????????????????????????????????????????????????????????????????????????????????????2a???????????????????????????????????????????????????????????????????????????2b???</div>
							{/* <div className={styles['tab']} style={{fontWeight: 'normal'}}>???????????????</div> */}
							<div style={{marginTop: '10px', marginBottom: '5px'}}><span style={{fontSize: '16px', marginTop: '10px', marginBottom: '5px', backgroundColor:'#FED658', borderRadius:'5px', padding:'5px'}}><b>??? ??????????????????</b></span></div>
							<div className={styles['img_func1_reason']}></div>
						</div>
					</div>
					<div className={styles['func1-question']}>
						<div style={{marginBottom: '5px'}}>
								<div style={{fontSize: '18px', marginTop: '8px', marginBottom: '5px'}}><b>??? ???</b></div>
								<div style={{marginBottom: '5px'}}><b>?????????????????????????????????????????????????????????</b></div>
								<div className={styles['tab']}>A.????????????????????????10</div>
								<div className={styles['tab']}>B.????????????????????????8</div>
								<div className={styles['tab']}>C.????????????????????????10</div>
								<div className={styles['tab']}>D.????????????????????????</div>
								<div style={{fontSize: '16px', marginTop: '5px', marginBottom: '5px'}}><b>????????????</b></div>
								<div className={styles['img_func1_question']}></div>
						</div>
					</div>
					<button className={styles['button-func1-backtomenu']} onClick={this.handleBacktoFunc1}>??? ???</button>
				</div>
			</div>
		</div>


		<div style={{display:this.state.showFunc2}}>
			<div className={styles['bgcolor2']} style={{display:this.state.display}}>	
				<div style={{display:this.state.showMenu}}>
					<button className={styles['button-func1']} onClick={this.handleButtonone}>????????????</button>      
					<button className={styles['button-func2']} onClick={this.handleButtontwo}>????????????</button>
					<button className={styles['button-func3']} onClick={this.handleButtonthree}>????????????</button>
					<button className={styles['button-func4']} onClick={this.handleButtonfour}>????????????</button>
				</div>			
				<div className={styles['func2-result1']} style={{display:this.state.showResult}}>
					<p>????????????:A</p>
					{/* <div style={{display:this.state.showResult}}><p className={styles['result-size']}>B</p></div> */}
				</div>		
				<div className={styles['func2-result1']} style={{display: this.state.hideResult}} onClick={this.handleToResult}>????????????????????????
				</div>
				<div className={styles['index-size']}>??? ?????????????????????</div>		
				<div className={styles['func2-questionbox']}>
					<div>
						<div style={{marginTop: '10px', marginBottom: '10px'}}><b>?????? 1</b></div>
						<div style={{marginBottom: '10px'}}><b>????????????????????????????????????P????????????????????????</b></div>
						<div>A. P???????????????(5cos??, 3sin??)</div>
						<div>B. P???????????????(3cos??, 5sin??)</div>
						<div>C. P???????????????(3sin??, 5cos??)</div>
						<div>D. P???????????????(5sin??, 3cos??)</div>
						<div className={styles['img_func2_question']}></div>
					</div>
				</div>
				<button className={styles['button-func2-backtomain']} onClick={this.handlebutton}>??? ???</button>
				
				<button className={styles['button-func2-toreasons']} onClick={this.handleToReansons2}>????????????</button>
			</div>
		</div>
			
			
		<div style={{display:this.state.showMore}}>
			<div style={{display:this.state.display}}>
				<div style={{display:this.state.showReasons2}} className={styles['detail-page2']}> 
					<div className={styles['func2-result2']}>
						<p>????????????</p>
						<p className={styles['result-size']}>A</p>
					</div>		
					<div className={styles['func2-reasons']}>
						{/* <div className={styles['func2-reasons-text']}> */}
						<div>
							<div style={{fontSize: '18px', marginTop: '10px', marginBottom: '10px'}}><b>????????????</b></div>
							<div style={{marginTop: '10px', marginBottom: '5px'}}><span style={{fontSize: '16px', marginTop: '10px', marginBottom: '5px', backgroundColor:'#9AE6F0', borderRadius:'5px', padding:'5px'}}><b>??? ???????????????</b></span></div>
							<div className={styles['tab']}>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
							<span style={{color:'red'}}><b>???????????????????????? x=acos??, y=bsin??, ?????? a ??????????????????????????????b ??????????????????????????????</b></span>????????????????????????????????????????????????????????????????????????????????????</div>
							<div style={{marginTop: '10px', marginBottom: '5px'}}><span style={{fontSize: '16px', marginTop: '10px', marginBottom: '5px', backgroundColor:'#9AE6F0', borderRadius:'5px', padding:'5px'}}><b>??? ??????????????????</b></span></div>
							<div className={styles['img_func2_reason']}></div>
						</div>
					</div>
					<div className={styles['func2-question']}>
						<div style={{fontSize: '18px', marginTop: '8px', marginBottom: '5px'}}><b>??? ???</b></div>
							<div style={{marginBottom: '5px'}}><b>????????????????????????????????????P????????????????????????</b></div>
							<div className={styles['tab']}>A. P???????????????(5cos??, 3sin??)</div>
							<div className={styles['tab']}>B. P???????????????(3cos??, 5sin??)</div>
							<div className={styles['tab']}>C. P???????????????(3sin??, 5cos??)</div>
							<div className={styles['tab']}>D. P???????????????(5sin??, 3cos??)</div>
							<div className={styles['img_func2_question']}></div>
						</div>
						<button className={styles['button-func2-backtomenu']} onClick={this.handleBacktoFunc2}>??? ???</button>
					</div>
					
					{/* <div className={styles['func2-reasons-pic']}></div> */}

			</div>
		</div>
			

		<div style={{display:this.state.showFunc3}}>
			<div className={styles['bgcolor3']} style={{display:this.state.display}}>	
				<div style={{display:this.state.showMenu}}>
					<button className={styles['button-func1']} onClick={this.handleButtonone}>????????????</button>      
					<button className={styles['button-func2']} onClick={this.handleButtontwo}>????????????</button>
					<button className={styles['button-func3']} onClick={this.handleButtonthree}>????????????</button>
					<button className={styles['button-func4']} onClick={this.handleButtonfour}>????????????</button>
				</div>
				<div className={styles['index-size']}>??? ?????????????????????</div>			
				<div className={styles['func3-routebox']}>
					<div style={{marginTop: '15px', marginBottom: '40px'}}>???????????????????????????????????????????????????????????????</div>
					<div style={{marginTop: '20px', marginBottom: '40px'}}>
						<span style={{fontSize:'22px'}}> ?????? </span>
						<span style={{fontSize:'22px'}}> --- </span>
						<span style={{fontSize:'22px'}}> ??? </span>
						<span style={{fontSize:'22px'}}> --- </span>
						<span style={{fontSize:'22px', backgroundColor:'#FFBA8F', borderRadius:'10px',padding:'5px'}}> ??????</span>
						<span style={{fontSize:'22px'}}> --- </span>
						<span style={{fontSize:'22px'}}> ?????????????????????</span>
					</div>
				</div>
				{/* <button className={styles['button-func3-backtomain']} onClick={this.handlebutton}>??? ???</button> */}
				<button className={styles['button-func3-backtomain']} onClick={this.handlebutton}>??? ???</button>
			</div>
		</div>
			
		<div style={{display:this.state.showMore}}>
			<div style={{display:this.state.display}}>
				<div style={{display:this.state.showFunc4}} className={styles['detail-page4']}>
				<div className={styles['index-size-4']}>??? ?????????????????????</div>
					<div className={styles['func4-contentbox']}>
						<div style={{paddingLeft:'0px', paddingTop:'0px'}}>
						<table border="3">
							<tr height="60">
								<td className={styles['line']}></td>
									<div className={styles['tableheadtext1']}><b>??????</b></div>
									<div className={styles['tableheadtext2']}><b>??????</b></div>
								<td width="270"><span style={{backgroundColor:'#C7F39F', borderRadius:'15px',paddingLeft:'10px', paddingRight:'10px', paddingBottom:'6px', paddingTop:'6px'}}><b>??????</b></span></td><td width="270"><b>???</b></td>
							</tr>
							<tr height="60">
								<td width="150"><b>????????????</b></td>
								<td width="270"><div style={{overflow: 'auto', height: '60px'}}>?????????????????????F1???F2???????????????????????????2a???2a??????F1F2???????????????P?????????????????????</div></td>
								<td width="270"><div style={{overflow: 'auto', height: '60px'}}>???????????????????????????????????????????????????????????????????????????circle??????</div></td>
							</tr>
							<tr height="60">
								<td width="150"><b>?????????</b></td>
								<td width="270">0???e???1</td>
								<td width="270">0</td>
							</tr>
							<tr height="60">
								<td width="150"><b>??????</b></td>
								<td width="270">??(a+b)</td>
								<td width="270">2??r</td>
							</tr>
							<tr height="60">
								<td width="150"><b>????????????</b></td>
								<td width="270"><div style={{overflow: 'auto', height: '60px'}}>x=acos??, y=bsin??, ?????? a ??????????????????????????????b ??????????????????????????????</div></td>
								<td width="270"><div style={{overflow: 'auto', height: '60px'}}>x=rcos??, y=rsin??, ?????? r ?????????????????????</div></td>
							</tr>
						</table>
						</div>
					</div>
					<button className={styles['button-func4-tocontent1']} onClick={this.handleContent1}>?????????</button>
					<button className={styles['button-func4-tocontent2']} onClick={this.handleContent2}>??????</button>
					<button className={styles['button-func4-tocontent3']} onClick={this.handleContent3}>??????</button>
					<button className={styles['button-func4-backtomenu']} onClick={this.handlebutton}>??? ???</button>
					<button className={styles['button-func4-backtomain']} onClick={this.handleButtonone}>??? ???</button>
				</div>
			</div>
		</div>
			

		<div style={{display:this.state.showMore}}>
			<div style={{display:this.state.display}}>
				<div style={{display:this.state.showContent1}} className={styles['detail-page4']}>
				<div className={styles['index-size-4']}>??? ?????????????????????</div>
					<div className={styles['func4-contentbox']}>
						<div>
						<table border="3">
							<tr height="60">
								<td className={styles['line']}></td>
									<div className={styles['tableheadtext1']}><b>??????</b></div>
									<div className={styles['tableheadtext2']}><b>??????</b></div>
								<td width="270"><span style={{backgroundColor:'#C7F39F', borderRadius:'15px',paddingLeft:'10px', paddingRight:'10px', paddingBottom:'6px', paddingTop:'6px'}}><b>??????</b></span></td><td width="270"><b>?????????</b></td>
							</tr>
							{/* <tr height="60"><td width="150"></td><td width="250"><b>?????????</b></td><td width="270"><b>?????????</b></td></tr> */}
							<tr height="60">
								<td width="150"><b>??????</b></td>
								<td width="270"><div style={{overflow: 'auto', height: '60px'}}>?????????????????????F1???F2???????????????????????????2a???2a??????F1F2???????????????P?????????????????????</div></td>
								<td width="270"><div style={{overflow: 'auto', height: '60px'}}>?????????????????????????????????????????????????????????????????????????????????</div></td>
							</tr>
							<tr height="60">
								<td width="150"><b>?????????</b></td>
								<td width="270">0???e???1</td>
								<td width="270">1</td>
							</tr>
							<tr height="60">
								<td width="150"><b>????????????</b></td>
								<td width="270"><div style={{overflow: 'auto', height: '60px'}}>x=acos??, y=bsin??, ?????? a ??????????????????????????????b ??????????????????????????????</div></td>
								<td width="270"><div style={{overflow: 'auto', height: '60px'}}>???????????????????????? y^2=2px, ?????? p (p???0) ???????????????</div></td>
							</tr>
							<tr height="60">
								<td width="150"><b>?????????</b></td>
								<td width="270">????????????????????????????????????</td>
								<td width="270">?????????????????????????????????</td>
							</tr>
						</table>
						</div>
					</div>
					<button className={styles['button-func4-tocontent1']} onClick={this.handleButtonfour}>???</button>
					<button className={styles['button-func4-tocontent2']} onClick={this.handleContent2}>??????</button>
					<button className={styles['button-func4-tocontent3']} onClick={this.handleContent3}>??????</button>
					<button className={styles['button-func4-backtomenu']} onClick={this.handlebutton}>??? ???</button>
					<button className={styles['button-func4-backtomain']} onClick={this.handleButtonone}>??? ???</button>
				</div>
			</div>
		</div>
			
		<div style={{display:this.state.showMore}}>
			<div style={{display:this.state.display}}>
				<div style={{display:this.state.showContent2}} className={styles['detail-page4']}>                
					<div className={styles['func4-detail2']}>
						<div className={styles['title-size']}>??????</div>
					</div>
					<p><button className={styles['button-func4-backtomenu']} onClick={this.handleBacktoFunc4}>??? ???</button></p>
				</div>
			</div>
		</div>

		<div style={{display:this.state.showMore}}>
			<div style={{display:this.state.display}}>
				<div style={{display:this.state.showContent3}} className={styles['detail-page4']}>                
					<div className={styles['func4-detail3']}>
						<div className={styles['title-size']}>??????</div>
					</div>
					<p><button className={styles['button-func4-backtomenu']} onClick={this.handleBacktoFunc4}>??? ???</button></p>
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
		var { currentDomainName } = this.props;
		if(currentDomainName === '????????????'){
			currentDomainName = '????????????(??????)';
			console.log('????????????????????????');
		  }
		if (localStorage.getItem('currentDomainName')){
			currentDomainName = localStorage.getItem('currentDomainName');
		};
		console.log('Testtesttesttesttest', currentDomainName);
		this.props.dispatch({
			type: 'learning/getDependence',
			payload: {
			domainName: currentDomainName,
			}
		});
	  	history.push('/learning');
    }
  }
  handleHomeButton(): void {
    if (this.props.authToken === '') {
      history.push('/login');
    } else {
	// localStorage.removeItem('topicsTree');
	localStorage.removeItem('currentDomainName');
	// localStorage.removeItem('topics');
	// localStorage.removeItem('learningPath');
	// localStorage.removeItem('learningTopicsTree');
 	history.push('/home');
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
