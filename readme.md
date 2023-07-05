
####You can find the detailed walkthrough here:
https://ui.docs.amplify.aws/react/connected-components/liveness

Step 4 will give you the code for the front-end.
Alternatively browse the front-end folder -- but it is all contained in the above tutorial or my video (https://www.youtube.com/watch?v=yja5HvR_9AQ)

##
#####For the lambda functions we need one to create one that creates the liveness sessions:

<pre><code>import boto3
import json

def lambda_handler(event, context):
    client = boto3.client('rekognition')
    response = client.create_face_liveness_session(    
        ClientRequestToken=event['request_token']
    )
    session_id = response.get("SessionId")
    return session_id        </code></pre>

##
#####And another one that fetches the results:

<pre><code>
import boto3
import json

def get_results_handler(event, context):
    client = boto3.client('rekognition')
    return client.get_face_liveness_session_results(
        SessionId=event['session']
    )    </code></pre>
