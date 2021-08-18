const settings = {
    development: {
        api_url: "https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/",
        aws_url: "https://bc-secure-storage-api-cuongnn-bucket83908e77-nczm2ffo15wh.s3.ap-northeast-1.amazonaws.com/"
    },
    staging: {
        api_url: "/",
        aws_url: "/"
    },
    production: {
        api_url: "/",
        aws_url: "/"
    },
};
export default settings[process.env.NODE_ENV]