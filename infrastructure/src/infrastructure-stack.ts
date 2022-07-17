import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { S3Buckets } from '_constructs/S3Buckets';

export class InfrastructureStack extends Stack {
  public readonly s3_buckets: S3Buckets;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.s3_buckets = new S3Buckets(this, 'ToDoList-S3-Buckets');
  }
}
