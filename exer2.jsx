//13 ------------------------------------------------
function Summary({ text }) {
    return ( /// 내가 작성한 부분
        <>
            <h1>Summary</h1>
              <p>{text}</p>
        </>
        );
  }
  
  function App() {
    return (
      <div id="app" data-testid="app">
        <Summary text="Fragments help you avoid unnecessary HTML elements." />
      </div>
    );
  }
  
  export default App;
  
  //14 --------------------------------
  // 궁금한 점: Input({richText, ...props})처럼 할때
  // ...props로 처리해도 되는것과 안되는것(이 경우 richText)의 차이는?
  //app.js
  import Input from './Input';
  
  function App() {
    return (
      <div id="content">
        <Input type="text" placeholder="Your name" />
        <Input richText placeholder="Your message" />
      </div>
    );
  }
  
  export default App;
  
  
  
  
  // Input.js
  export default function Input({richText, ...props}) {
    // return a <textarea> if a richText prop is true
    // return an <input> otherwise
    // forward / set the received props on the returned elements
      if(richText){
        return <textarea {...props} />
    }else{
        return <input {...props} />
    }
  }
  
  