import React, { useState, useEffect } from 'react';

function MainForm({ onAnswered }) {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'answers.txt')
      .then(res => res.text())
      .then(text => {
        setAnswers(text.split('\n').map(s => s.trim()).filter(Boolean));
        setLoading(false);
      })
      .catch(() => {
        setError('응답 풀을 불러오지 못했습니다.');
        setLoading(false);
      });
  }, []);

  const handleAsk = (e) => {
    e.preventDefault();
    if (!question.trim() || answers.length === 0) return;
    const answer = answers[Math.floor(Math.random() * answers.length)];
    onAnswered(question.trim(), answer);
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div style={{color:'red'}}>{error}</div>;
  if (answers.length === 0) return <div style={{color:'red',textAlign:'center',marginTop:40}}>응답 풀이 비어 있습니다. answers.txt 파일을 확인하세요.</div>;

  return (
    <form className="magic-conch-card" onSubmit={handleAsk} style={{
      maxWidth: 400,
      width: '100%',
      minWidth: 0,
      margin: '40px auto',
      padding: 24,
      boxShadow: '0 2px 8px #eee',
      borderRadius: 12,
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
      <h2 style={{
        textAlign:'center',
        fontSize: '1.3rem',
        marginBottom:8,
        color: '#6c63ff',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
      }}>
        <span role="img" aria-label="소라고동" style={{fontSize:'1.6em'}}>🐚</span>
        마법의 소라고동님께 무엇이든 물어보세요
      </h2>
      <input
        type="text"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="질문을 입력하세요"
        style={{
          width:'100%',
          padding: '14px 12px',
          fontSize:18,
          margin:'18px 0',
          borderRadius:10,
          border:'1.5px solid #b39ddb',
          boxSizing:'border-box',
          outline: 'none',
          background:'#f7f6fd',
          color:'#333',
          fontWeight:500
        }}
        maxLength={100}
        required
      />
      <button type="submit" style={{
        width:'100%',
        padding:14,
        fontSize:18,
        borderRadius:10,
        background:'linear-gradient(90deg,#6c63ff 60%,#b39ddb 100%)',
        color:'#fff',
        border:'none',
        cursor:'pointer',
        fontWeight:700,
        letterSpacing:'-0.5px',
        marginTop:4,
        boxShadow:'0 2px 8px #eee'
      }}>🐚 마법의 소라고동님께 물어보기</button>
    </form>
  );
}

export default MainForm; 