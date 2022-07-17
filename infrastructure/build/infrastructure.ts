#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { InfrastructureStack } from '../src/infrastructure-stack';

const app = new App();

new InfrastructureStack(app, 'ToDoList-Infrastructure', {
  stackName: 'ToDoList-Infrastructure',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
  },
});
