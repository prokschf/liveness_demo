import boto3
import json

#Run: pip install -r requirements.txt --target .
#zip the folder
#upload to lambda

def lambda_handler(event, context):
    client = boto3.client('rekognition')
    response = client.create_face_liveness_session(    
        ClientRequestToken=event['request_token']
    )
    session_id = response.get("SessionId")
    return session_id