#!/bin/bash

# invalidate the cache referenced by DISTRIBUTION_ID, or the argument
# to this script
function usage() {
  if [ -z "$1" ]; then
    echo "DISTRIBUTION_ID must be set, or else supply an argument to this script"
    return
  elif [ -z "$AWS_PROFILE" ]; then
    echo "AWS_PROFILE must be set"
    return
  else
    echo "Did not recognize $1 as an option."
  fi
  echo "Recognized names: stage, prod"
  exit 1
}

trap "usage \'$1\'" ERR

function invalidate_cache() {
    aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
}

if [ ! -z "$DISTRIBUTION_ID" ]; then
    invalidate_cache
elif [ -z "$1" ]; then
    ERR 2>/dev/null
else
    case $1 in
        stage)
            DISTRIBUTION_ID='E3M75UD5ED42PP'
            ;;
        prod)
            DISTRIBUTION_ID='	E34KVGE1W0ZHAG'
            ;;
        *)
          ERR 2>/dev/null
    esac
    invalidate_cache
fi