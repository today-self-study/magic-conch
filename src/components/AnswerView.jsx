import React from 'react';
import { encryptData } from '../utils/crypto';

function AnswerView({ question, answer, onReset }) {
  const shareUrl = () => {
    const d = encryptData({ question, answer });
    return `${window.location.origin}/result?d=${encodeURIComponent(d)}`;
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
      <div style={{fontSize:18,marginBottom:12,color:'#888'}}>내가 물어본 질문</div>
      <div style={{fontWeight:'bold',fontSize:20,marginBottom:24}}>{question}</div>
      <div style={{fontSize:18,marginBottom:12,color:'#888'}}>마법의 소라고동의 대답</div>
      <div style={{fontWeight:'bold',fontSize:24,marginBottom:32,color:'#6c63ff'}}>{answer}</div>
      <button onClick={onReset} style={{marginRight:8,padding:'10px 18px',fontSize:16,borderRadius:8,background:'#eee',border:'none',cursor:'pointer'}}>나도 물어보기</button>
      <button onClick={handleShare} style={{padding:'10px 18px',fontSize:16,borderRadius:8,background:'#6c63ff',color:'#fff',border:'none',cursor:'pointer'}}>공유하기(URL 복사)</button>
    </div>
  );
}

export default AnswerView; 