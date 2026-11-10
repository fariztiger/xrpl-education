import React from 'react';
import {Composition, registerRoot, AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Sequence} from 'remotion';

const W=1080,H=1920;
const SCENES=[
 {start:0,end:240,kicker:'EXPLAINED IN 60 SECONDS',title:'What if lending worked\non the XRP Ledger?',sub:'Explore the proposed XRPL native Lending Protocol',accent:'#69e9df'},
 {start:240,end:540,kicker:'THE PROPOSAL',title:'Introducing XLS-66',sub:'A draft protocol for fixed-term, uncollateralized loans using pooled funds.',accent:'#85b8ff'},
 {start:540,end:900,kicker:'HOW IT COULD WORK',title:'Depositors → Vault\n→ Borrower',sub:'Assets are pooled in a Single Asset Vault. Lending requires underwriting and risk management.',accent:'#69e9df'},
 {start:900,end:1200,kicker:'IMPORTANT DETAIL',title:'Credit checks matter.',sub:'The proposed design relies on off-chain underwriting and risk assessment.',accent:'#e9c58a'},
 {start:1200,end:1530,kicker:'KNOW THE RISKS',title:'Not risk-free.',sub:'Defaults, liquidity constraints and implementation risks still matter.',accent:'#f3ab9f'},
 {start:1530,end:1800,kicker:'EXPLORE MORE',title:'Learn XRPL.\nThink critically.',sub:'Visit the XRPL Interactive Learning Lab • Verify details in the official XLS-66 specification.',accent:'#69e9df'},
];
const makeText=(t)=>t.split('\n').map((x,i)=><React.Fragment key={i}>{i>0&&<br/>}{x}</React.Fragment>);
const shade={position:'absolute',inset:0,background:'radial-gradient(ellipse at 85% 15%,#124653 0%,transparent 45%),radial-gradient(ellipse at 10% 80%,#162855 0%,transparent 55%),#07111e'};
const Badge=({children,color='#60e7db'})=><div style={{border:'2px solid '+color+'66',borderRadius:100,padding:'14px 25px',fontSize:27,color,letterSpacing:3,fontWeight:800,display:'inline-block'}}>{children}</div>;
function Network({frame}){
 let dots=Array.from({length:13},(_,i)=>({x:W/2+Math.sin(i*2.399)* (180+i%4*60),y:875+Math.cos(i*2.399)*(180+i%4*65)}));
 return <svg width={W} height="700" viewBox="0 0 1080 700" style={{position:'absolute',top:750,left:0,opacity:.85}}>
 {dots.map((p,i)=>{let x=p.x,y=p.y-875+350;return <React.Fragment key={i}><line x1="540" y1="350" x2={x} y2={y} stroke="#58e7d2" opacity=".22" strokeWidth="3"/><circle cx={x} cy={y} r="10" fill={i%3===frame%3?'#e5ffff':'#45a8b3'} /></React.Fragment>})}
 <circle cx="540" cy="350" r="100" stroke="#72e9db" strokeWidth="3" fill="#123f4c"/><text x="540" y="372" fill="white" fontWeight="900" textAnchor="middle" fontSize="95">X</text></svg>
}
function Flow({frame}){
 let nodes=[{s:'DEPOSITOR',x:65},{s:'VAULT',x:395},{s:'BORROWER',x:725}];
 return <div style={{position:'absolute',top:950,left:55,display:'flex',gap:16}}>
 {nodes.map((n,i)=><React.Fragment key={n.s}><div style={{width:260,padding:'50px 10px',textAlign:'center',background:'#102c41',border:'3px solid #5de2d6',borderRadius:25,color:'white',fontSize:27,fontWeight:900,opacity:interpolate(frame,[540+i*32,570+i*32],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}>{n.s}</div>{i<2&&<span style={{fontSize:47,color:'#70eadd',alignSelf:'center'}}>→</span>}</React.Fragment>)}
 </div>
}
function Scene({scene}){
 let f=useCurrentFrame(),{fps}=useVideoConfig(),local=f-scene.start;
 let entry=spring({frame:local,fps,config:{damping:16,stiffness:90}});
 let opacity=interpolate(f,[scene.start,scene.start+15,scene.end-17,scene.end],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <AbsoluteFill style={{opacity,padding:'210px 90px 140px',color:'#effcff',fontFamily:'Arial, sans-serif'}}>
 <div style={{transform:'translateY('+((1-entry)*65)+'px)'}}><Badge color={scene.accent}>{scene.kicker}</Badge><h1 style={{fontWeight:900,fontSize:110,lineHeight:1.11,letterSpacing:-5,margin:'55px 0',whiteSpace:'normal'}}>{makeText(scene.title)}</h1><p style={{fontSize:44,lineHeight:1.35,color:'#b8d0df',maxWidth:900}}>{scene.sub}</p></div>
 {scene.start===0&&<Network frame={Math.floor(f/10)}/>}
 {scene.start===540&&<Flow frame={f}/>}
 {scene.start===900&&<div style={{marginTop:110,border:'2px solid #bcb08a',borderRadius:35,padding:58,fontSize:45,color:'#f0dcaf'}}>Underwriting ≠ guaranteed repayment</div>}
 {scene.start===1200&&<div style={{marginTop:100,display:'flex',flexDirection:'column',gap:24}}>{['Borrower default','Liquidity limits','Protocol and operational risk'].map(x=><div key={x} style={{padding:25,borderLeft:'6px solid #ecab9f',background:'#1f293c',fontSize:43}}>{x}</div>)}</div>}
 </AbsoluteFill>
}
const Video=()=>{
 let f=useCurrentFrame();const progress=f/1800*100;
 return <AbsoluteFill style={{width:W,height:H,overflow:'hidden'}}><div style={shade}/><div style={{position:'absolute',top:80,left:85,color:'#6ae9da',fontSize:32,fontFamily:'Arial',fontWeight:900,letterSpacing:2}}>✦ XRPL / LEARNING LAB</div>
 {SCENES.map((scene,i)=><Scene key={i} scene={scene}/>)}
 <div style={{position:'absolute',bottom:87,left:85,right:85,fontFamily:'Arial',fontSize:25,color:'#9bbaca'}}>EDUCATIONAL SIMULATION · XLS-66 DRAFT · NOT FINANCIAL ADVICE</div>
 <div style={{position:'absolute',bottom:42,left:85,right:85,height:8,background:'#23394d',borderRadius:10}}><div style={{height:'100%',width:progress+'%',background:'#5ce0d6',borderRadius:10}}/></div></AbsoluteFill>
};
const Root=()=> <Composition id="XRPLLending" component={Video} durationInFrames={1800} fps={30} width={W} height={H}/>;
registerRoot(Root);
