#!/bin/bash

set -x
# invalidate the cache referenced by BUCKETNAME, or the argument
# to this script
function usage() {
  if [ -z "$1" ]; then
    echo "BUCKETNAME must be set, or else supply an argument to this script"
    return
  elif [ -z "$AWS_PROFILE" ]; then
    echo "AWS_PROFILE must be set"
    return
  else
    echo "Did not recognize $1 as an option."
  fi
  echo "Recognized environments: stage, prod"
  exit 1
}

trap "usage \'$1\'" ERR

function deploy_files() {
    npm run build && 
    npm run export &&
    aws s3 sync ../../out/ s3://$BUCKETNAME --region $REGION --acl public-read &&
    # for i in $(aws s3 ls s3://$BUCKETNAME | grep html | awk '{ print $NF }'); do aws s3 mv s3://$BUCKETNAME/$i s3://$BUCKETNAME/${i%.*} --acl public-read; done
}

if [ ! -z "$BUCKETNAME" ]; then
    deploy_files
elif [ -z "$1" ]; then
    ERR 2>/dev/null
else
    case $1 in
        stage)
            BUCKETNAME='stage.redspace.com'
            REGION='us-east-1'
            ;;
        prod)
            BUCKETNAME='www.redspace.com'
            REGION='us-east-1'
            ;;
        *)
          ERR 2>/dev/null
    esac
    deploy_files
fi