import React, { useState, useEffect } from 'react'
import "../CSS/Microphone.css"

const Microphone = () => {

    const [listening, setlistening] = useState(false)
    var text = "";

    const startthemic = () => {
        const textscreen = document.getElementById("textscreen")
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new window.SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "hi-In"

        let p = document.createElement("p")

        recognition.addEventListener("result", (e) => {
            text = Array.from(e.results).map(result => result[0])
                .map(result => result.transcript)
                .join("")
            console.log(text);
            textscreen.innerHTML = text;
        })
        if (!listening) {
            recognition.start();
            setlistening(true)
        }
        else {
            recognition.stop();
            setlistening(false)
        }
    }

    // const speakplease = () => {
    //     var msg = new SpeechSynthesisUtterance();
    //     var voices = window.speechSynthesis.getVoices();
    //     msg.voice = voices[10];
    //     msg.volume = 1;
    //     msg.rate = 1;
    //     msg.pitch = 2;
    //     msg.text = "मैं अवतार लेता हूं. मैं प्रकट होता हूं. जब जब धर्म की हानि होती है, तब तब मैं आता हूं, जब जब अधर्म बढ़ता है तब तब मैं साकार रूप से लोगों के सम्मुख प्रकट होता हूं, सज्जन लोगों की रक्षा के लिए मै आता हूं, दुष्टों के विनाश करने के लिए मैं आता हूं, धर्म की स्थापना के लिए में आता हूं और युग युग में जन्म लेता हूं";
    //     msg.lang = "hi"
    //     speechSynthesis.getVoices().forEach(function(voice) {
    //         console.log(voice.name, voice.default ? voice.default :'');
    //       });
    //     window.speechSynthesis.speak(msg);
    // }

    useEffect(() => {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new window.SpeechRecognition();
        recognition.continuous = true
        recognition.interimResults = true;

        recognition.addEventListener("result", (e) => {
            const text = Array.from(e.results).map(result => result[0])
                .map(result => result.transcript)
                .join("")
            console.log(text);
        })
    }, [])

    // const speak = () => {
    //     var sanvad = new SpeechSynthesisUtterance();
    //     sanvad.text = text;
    //     window.speechSynthesis.speak(sanvad);
    // }


    return (<div className='Microphone-component-holder'>
        <div className="mic-body">
            <div className="mic-holder">
                <div className="mic" onClick={startthemic}>
                    <i className="fa-solid fa-microphone"></i>
                </div>
            </div>
            <div className="mic-tester">
                {listening ? <div className="mic-directions">" Speak Now "</div> : <div className="mic-directions">"Enter your audio"</div>}
                {listening ? <div className="mic-actions"> "Listening"</div> : <div className="mic-actions"> "Waiting for input"</div>}
            </div>
        </div>
        <div className="texts container" id='textscreen'>
        </div>
        {/* <button onClick={speakplease} className="speaker">Speak</button> */}
    </div>
    )
}

export default Microphone