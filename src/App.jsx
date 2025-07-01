import React, { useState } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import MainForm from './components/MainForm';
import AnswerView from './components/AnswerView';
import { decryptData } from './utils/crypto';

function MainFlow() {
  const [step, setStep] = useState('ask');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAnswered = (q, a) => {
    setQuestion(q);
    setAnswer(a);
    setStep('result');
  };
  const handleReset = () => {
    setQuestion('');
    setAnswer('');
    setStep('ask');
  };

  return step === 'ask' ? (
    <MainForm onAnswered={handleAnswered} />
  ) : (
    <AnswerView question={question} answer={answer} onReset={handleReset} />
  );
}

function ResultPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const d = params.get('d');
  let content = null;
  if (!d) {
    content = <div style={{color:'red',textAlign:'center',marginTop:40}}>잘못된 접근입니다.</div>;
  } else {
    const data = decryptData(d);
    if (!data) {
      content = <div style={{color:'red',textAlign:'center',marginTop:40}}>복호화에 실패했습니다. URL이 올바른지 확인하세요.</div>;
    } else {
      content = <AnswerView question={data.question} answer={data.answer} onReset={() => window.location.href = '/'} />;
    }
  }
  return content;
}

function App() {
  return (
    <HashRouter>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',minHeight:'100vh',width:'100vw',background:'#f5f6fa'}}>
        <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',minHeight:'80vh'}}>
          <Routes>
            <Route path="/" element={<MainFlow />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </div>
        <footer style={{textAlign:'center',margin:'40px 0 0 0',color:'#aaa',fontSize:14}}>
          © {new Date().getFullYear()} 마법의 소라고동 서비스
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
