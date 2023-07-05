import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsexports from './aws-exports';
import { FaceLivenessDetector } from '@aws-amplify/ui-react-liveness';
import { Loader, ThemeProvider } from '@aws-amplify/ui-react';

Amplify.configure(awsexports);


export function App() {
  const [loading, setLoading] = React.useState(true);
  const [createLivenessApiData, setCreateLivenessApiData] = React.useState(null);

  React.useEffect(() => {
    const fetchCreateLiveness = async () => {
      /*
       * This should be replaced with a real call to your own backend API
       */
      //await new Promise((r) => setTimeout(r, 2000));
      const mockResponse = { sessionId: 'a76c2ed8-45d1-44ed-ae48-fdee7aebd5f9' };
      const data = mockResponse;

      setCreateLivenessApiData(data);
      setLoading(false);
    };

    fetchCreateLiveness();
  }, []);

  const handleAnalysisComplete = async () => {
    /*
     * This should be replaced with a real call to your own backend API
     */
    const response = await fetch(
      `/api/get?sessionId=${createLivenessApiData.sessionId}`
    );
    const data = await response.json();

   // if (data.isLive) {
  //    console.log('User is live');
 //   } else {
//      console.log('User is not live');
    //}
  };

  return (
    <ThemeProvider>
      {loading ? (
        <Loader />
      ) : (
        <FaceLivenessDetector
          sessionId={createLivenessApiData.sessionId}
          region="us-east-1"
          onAnalysisComplete={handleAnalysisComplete}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
