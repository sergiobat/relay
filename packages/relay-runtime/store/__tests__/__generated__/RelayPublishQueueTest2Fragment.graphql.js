/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<56d118bb12ffc28216700fc50a1e6ca9>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayPublishQueueTest2Fragment$fragmentType: FragmentType;
export type RelayPublishQueueTest2Fragment$ref = RelayPublishQueueTest2Fragment$fragmentType;
export type RelayPublishQueueTest2Fragment$data = {|
  +username: ?string,
  +$refType: RelayPublishQueueTest2Fragment$fragmentType,
  +$fragmentType: RelayPublishQueueTest2Fragment$fragmentType,
|};
export type RelayPublishQueueTest2Fragment = RelayPublishQueueTest2Fragment$data;
export type RelayPublishQueueTest2Fragment$key = {
  +$data?: RelayPublishQueueTest2Fragment$data,
  +$fragmentRefs: RelayPublishQueueTest2Fragment$fragmentType,
  +$fragmentSpreads: RelayPublishQueueTest2Fragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayPublishQueueTest2Fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "52a36fbd5032220f651acbfdc2346730";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayPublishQueueTest2Fragment$fragmentType,
  RelayPublishQueueTest2Fragment$data,
>*/);
