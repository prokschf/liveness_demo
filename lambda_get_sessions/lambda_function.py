import boto3
import json

#Run: pip install -r requirements.txt --target .
#zip the folder
#upload to lambda

def lambda_handler(event, context):
    client = boto3.client('rekognition')
    return client.get_face_liveness_session_results(
        SessionId=event['session']
    ) 