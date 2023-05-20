#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DemocdkpipelineStack } from '../lib/democdkpipeline-stack';

const app = new cdk.App();
new DemocdkpipelineStack(app, 'DemocdkpipelineStack', {
  env: {account: '769065143225', region: 'eu-west-1'},
});