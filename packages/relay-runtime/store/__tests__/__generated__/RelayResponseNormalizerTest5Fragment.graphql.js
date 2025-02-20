/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<4ac2b1a5b8193996517a6e0a21d4bb6b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayResponseNormalizerTest5Fragment$fragmentType: FragmentType;
export type RelayResponseNormalizerTest5Fragment$ref = RelayResponseNormalizerTest5Fragment$fragmentType;
export type RelayResponseNormalizerTest5Fragment$data = {|
  +name: ?string,
  +$refType: RelayResponseNormalizerTest5Fragment$fragmentType,
  +$fragmentType: RelayResponseNormalizerTest5Fragment$fragmentType,
|};
export type RelayResponseNormalizerTest5Fragment = RelayResponseNormalizerTest5Fragment$data;
export type RelayResponseNormalizerTest5Fragment$key = {
  +$data?: RelayResponseNormalizerTest5Fragment$data,
  +$fragmentRefs: RelayResponseNormalizerTest5Fragment$fragmentType,
  +$fragmentSpreads: RelayResponseNormalizerTest5Fragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayResponseNormalizerTest5Fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "0f913929d59d51798f881b608c35497e";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayResponseNormalizerTest5Fragment$fragmentType,
  RelayResponseNormalizerTest5Fragment$data,
>*/);
