import AWS from "aws-sdk";
export default class S3Api {
  constructor(file) {
    var fileName = file.name;
    var albumPhotosKey = "creative_works/";
    var photoKey = albumPhotosKey + fileName;
    AWS.config.region = "ap-northeast-1";
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "ap-northeast-1:f9f79180-8602-4034-a400-8db839a07c45",
    });
    return new AWS.S3.ManagedUpload({
      params: {
        Bucket: "bc-secure-storage-api-cuongnn-bucket83908e77-nczm2ffo15wh",
        Key: photoKey,
        Body: file,
      },
    });
  }
}
