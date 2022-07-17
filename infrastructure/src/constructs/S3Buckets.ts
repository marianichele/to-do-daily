import { RemovalPolicy } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { v4 as uuidv4 } from 'uuid';

export class S3Buckets extends Construct {
  public readonly main_bucket: Bucket;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.main_bucket = new Bucket(scope, 'Main-Bucket', {
      bucketName: `todo-list-main-bucket-${uuidv4()}`,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
  }
}
