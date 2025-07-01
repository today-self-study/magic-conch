import React, { useState, useEffect } from 'react';

function MainForm({ onAnswered }) {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/answers.txt')
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

  return (
    <form onSubmit={handleAsk} style={{maxWidth:400,margin:'40px auto',padding:24,boxShadow:'0 2px 8px #eee',borderRadius:12,background:'#fff'}}>
      <h2 style={{textAlign:'center'}}>마법의 소라고동님께 무엇이든 물어보세요</h2>
      <input
        type="text"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="질문을 입력하세요"
        style={{width:'100%',padding:12,fontSize:16,margin:'16px 0',borderRadius:8,border:'1px solid #ccc'}}
        maxLength={100}
        required
      />
      <button type="submit" style={{width:'100%',padding:12,fontSize:18,borderRadius:8,background:'#6c63ff',color:'#fff',border:'none',cursor:'pointer'}}>마법의 소라고동님께 물어보기</button>
    </form>
  );
}

export default MainForm; 