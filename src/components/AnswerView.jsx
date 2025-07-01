import React from 'react';
import { encryptData } from '../utils/crypto';

function AnswerView({ question, answer, onReset }) {
  // HashRouter 환경에 맞는 공유 URL 생성
  const shareUrl = () => {
    const d = encryptData({ question, answer });
    return `${window.location.origin}${window.location.pathname}#/result?d=${encodeURIComponent(d)}`;
  };

  // 메인으로 이동 (HashRouter)
  const handleAskAgain = () => {
    window.location.href = window.location.origin + window.location.pathname + '#/';
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl());
      alert('공유 URL이 복사되었습니다!');
    } catch {
      alert('URL 복사에 실패했습니다.');
    }
  };

  return (
    <div className="magic-conch-card" style={{
      maxWidth: 400,
      width: '100%',
      minWidth: 0,
      margin: '40px auto',
      padding: 24,
      boxShadow: '0 2px 8px #eee',
      borderRadius: 12,
      background: '#fff',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,marginBottom:8}}>
        <span role="img" aria-label="소라고동" style={{fontSize:'1.6em'}}>🐚</span>
        <span style={{fontWeight:700,fontSize:20,color:'#6c63ff',letterSpacing:'-0.5px'}}>마법의 소라고동</span>
      </div>
      <div style={{fontSize:16,marginBottom:8,color:'#888'}}>물어본 질문</div>
      <div style={{fontWeight:'bold',fontSize:18,marginBottom:18,color:'#333',wordBreak:'break-all'}}>{question}</div>
      <div style={{fontSize:16,marginBottom:8,color:'#888'}}>마법의 소라고동의 대답</div>
      <div style={{fontWeight:'bold',fontSize:22,marginBottom:24,color:'#6c63ff',wordBreak:'break-all'}}>{answer}</div>
      <div style={{display:'flex',gap:8,justifyContent:'center'}}>
        <button
          onClick={handleAskAgain}
          style={{
            padding:'10px 18px',
            fontSize:16,
            borderRadius:10,
            background:'linear-gradient(90deg,#6c63ff 60%,#b39ddb 100%)',
            color:'#fff',
            border:'none',
            cursor:'pointer',
            fontWeight:700,
            display:'flex',
            alignItems:'center',
            gap:6,
            boxShadow:'0 2px 8px #eee',
            transition:'background 0.2s',
          }}
          onMouseOver={e => e.currentTarget.style.background = '#b39ddb'}
          onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg,#6c63ff 60%,#b39ddb 100%)'}
        >
          <span role="img" aria-label="소라고동" style={{fontSize:'1.2em'}}>🐚</span>
          마법의 소라고동님께 물어보기
        </button>
        <button
          onClick={handleShare}
          style={{
            padding:'10px 18px',
            fontSize:18,
            borderRadius:10,
            background:'#ede7f6',
            color:'#6c63ff',
            border:'none',
            cursor:'pointer',
            fontWeight:700,
            display:'flex',
            alignItems:'center',
            boxShadow:'0 2px 8px #eee',
            transition:'background 0.2s',
          }}
          onMouseOver={e => e.currentTarget.style.background = '#d1c4e9'}
          onMouseOut={e => e.currentTarget.style.background = '#ede7f6'}
        >
          <span role="img" aria-label="복사" style={{fontSize:'1.2em'}}>📋</span>
        </button>
      </div>
    </div>
  );
}

export default AnswerView; 