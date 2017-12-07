// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const awsmobile = {
aws_app_analytics : 'enable',
aws_cognito_identity_pool_id : 'ap-northeast-1:14a4c4c7-a383-4867-8cc8-2b70c35e2ab3',
aws_cognito_region : 'ap-northeast-1',
aws_content_delivery : 'enable',
aws_content_delivery_bucket : 'alisdevtest-hosting-mobilehub-903237597',
aws_content_delivery_bucket_region : 'ap-northeast-1',
aws_content_delivery_cloudfront : 'enable',
aws_content_delivery_cloudfront_domain : 'd25vqvn2fhwje6.cloudfront.net',
aws_mobile_analytics_app_id : 'c18f53b88e7b4dcaa507ecda7755e007',
aws_project_id : 'aa3aa0c3-5329-4c1e-a6a2-e1f3d81d30de',
aws_project_name : 'alis-dev-test',
aws_project_region : 'ap-northeast-1',
aws_resource_name_prefix : 'alisdevtest-mobilehub-903237597',
}

export default awsmobile;
var AWS = require('aws-sdk');
AWS.config.region = awsmobile.aws_project_region;
AWS.config.update({customUserAgent: 'MobileHub v0.1'});