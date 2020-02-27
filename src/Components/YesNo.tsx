import React from 'react';
import Widget from './Widget';

const YesNo = () => {
  const [question, setQuestion] = React.useState('');
  const [lastAskedQuestion, setLastAskedQuestion] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState();

  React.useEffect(() => {
    // Oppgave 6.5: Fetch data etter første render.
  }, []);

  const updateQuestion = (evt: any) => {
    // Oppgave 6.2: Oppdater question staten med det som
    // blir skrevet inn i input feltet.
  }

  const fetchImage = () => {
    // Oppgave 6.3: Fetch data fra APIet
    // https://yesno.wtf/api og oppdater imageUrl-staten.
  }

  const askQuestion = (evt: any) => {
    evt.preventDefault();

    // Oppgave 6.3: Kall på fetchImage-metoden for å hente data
    // og oppdater lastAskedQueston- og question-staten.
  }

  return (
    <Widget title={lastAskedQuestion}>
      {
        imageUrl &&
        <img alt={'yes or no gif'} src={imageUrl} />
      }
      <form
        className="yesOrNoForm"
      >
        <label
          htmlFor="yesOrNoQuestionInput"
        >
          Still nytt spørsmål:
        </label>
        <input
          id="yesOrNoQuestionInput"
          value={question}
          onChange={updateQuestion}
        />
      </form>
    </Widget>
  );
}

export default YesNo;
